import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { WithContext as ReactTags } from 'react-tag-input';
import { Link } from 'react-router';

import { fetchWord } from '../../actions/word';
import { fetchLexersCats } from '../../actions/lexer';
import { saveTranslation } from '../../actions/word/saveTranslation';
import { includeCategory } from '../../actions/word/includeCategory';
import { excludeCategory } from '../../actions/word/excludeCategory';
import LexerSimpleList from '../../components/lexers/LexerSimpleList';
import { LEXER_CATEGORY_ID } from '../../constants';

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
    this.chooseCat = this.chooseCat.bind(this);
  }

  componentWillMount() {
    this.props.fetchWord(this.props.params.wordId);
    this.props.fetchLexersCats(LEXER_CATEGORY_ID);
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

  chooseCat(id) {
    const { list } = this.props.categories;
    const selectedIdx = _.findIndex(this.props.word.categoriesInclude, (o) => o.id == id);
    const indx = _.findIndex(list, ['id', id]);
    console.log('wybralem kat', list[indx]);

    if (selectedIdx !== -1) {
      this.props.excludeCategory(this.props.word.id, id);
    } else {
      this.props.includeCategory(this.props.word.id, id);
    }
    /*const y = _.findIndex(cats, ['id', id]);
    if (y !== -1) {
      cats = cats.slice(0, y).concat(cats.slice(y+1));
    } else {
      cats.push(list[indx]);
      cats = cats.map(function(item) {
        return {...item, categoryType: 'C'}
      });
    }
    this.props.lexerActions.clearLexersCats(id);*/
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
        <p>{this.props.word.errorMsg}</p>
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
        <div class="row">
          <div class="col-sm-8">

          </div>
          <div class="col-sm-4">
            <h3>Categories</h3>
            <LexerSimpleList
              ref={(catChild) => { this._catChild = catChild }}
              {...this.props.categories}
              onClick={this.chooseCat}
              selected={this.props.word.categoriesInclude}
              exclude={false}/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return ({
    word: state.word,
    wordTranslation: state.wordTranslation,
    language: state.language,
    categories: state.lexers.categories,
	});
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
      fetchWord: fetchWord,
      includeCategory: includeCategory,
      excludeCategory: excludeCategory,
      saveTranslation: saveTranslation,
      fetchLexersCats: fetchLexersCats
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(wordDetails);
