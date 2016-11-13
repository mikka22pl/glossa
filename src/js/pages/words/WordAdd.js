import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
//import AutosuggestWord from '../../components/forms/AutosuggestWord';

import * as wordActions from '../../actions/word';
import WordAddForm from '../../components/forms/WordAddForm';
import WordsList from '../../components/WordsList';

class WordAdd extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchWords(this.props.language.id, 'top10');
  }

  handleSubmit = (values) => {
    this.props.saveWord(null, values.word, this.props.language.id)
      .then((response) => {
        this.props.fetchWords(this.props.language.id, 'top10');
      });
    this.refs.wordAddForm.reset();
  }

  render() {
    const words = this.props.words.list || [];
    return (
      <div>
        <WordAddForm ref="wordAddForm" onSubmit={this.handleSubmit} />
        <WordsList list={words}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
	return ({
    language: state.language,
    words: state.words
  });
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators(wordActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(WordAdd);
