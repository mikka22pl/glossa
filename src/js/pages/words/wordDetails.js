import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { WithContext as ReactTags } from 'react-tag-input';
import { Link } from 'react-router';

import * as wordsActions from '../../actions/word';
import { saveTranslation } from '../../actions/word/saveTranslation';

class wordDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      suggestions: []
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  componentWillMount() {
    this.props.wordsActions.fetchWord(this.props.params.wordId);
  }

  componentWillReceiveProps(nextProps) {
    const { word } = nextProps;
    if (word && !word.fetching && word.id && word.translations.length) {
      const tags = nextProps.word.translations.map(function(t) {
        return {id: t.id, text: t.name};
      });
      this.setState({
        ...this.state,
        tags: tags
      });
    }
  }

  handleDelete(i) {
    let tags = this.state.tags;
    tags.splice(i, 1);
    this.setState({tags: tags});
  }

  handleAddition(tag) {
    let tags = this.state.tags;
    tags.push({
        id: tags.length + 1,
        text: tag
    });
    this.props.saveTranslation(this.props.word.id, tag);
    this.setState({tags: tags});
  }

  handleDrag(tag, currPos, newPos) {
    let tags = this.state.tags;
    // mutate array
    tags.splice(currPos, 1);
    tags.splice(newPos, 0, tag);
    // re-render
    this.setState({ tags: tags });
  }

  render() {
    const { word } = this.props || {};
    const categories = word.categories || [];
    const cats = categories.map(function(cat) {
      return <p key={cat.id}>{cat.name}</p>
    });
    let tags = this.state.tags;
    let suggestions = this.state.suggestions;
    return (
      <div>
        <h2>{word.name}</h2>
        <div>
          <Link to={`words/${this.props.language.id}`}>Words</Link>
        </div>
        {cats}
        <div>
          <ReactTags tags={tags}
                      suggestions={suggestions}
                      handleDelete={this.handleDelete}
                      handleAddition={this.handleAddition}
                      handleDrag={this.handleDrag} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return ({
    word: state.word,
    wordTranslation: state.wordTranslation,
    language: state.language
	});
}
function mapDispatchToProps(dispatch) {
	return {
    wordsActions: bindActionCreators(wordsActions, dispatch),
    saveTranslation: bindActionCreators(saveTranslation, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(wordDetails);
