import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import * as wordsActions from '../../actions/word';
import WordsList from '../../components/WordsList';

class Words extends React.Component {
  componentWillMount() {
    this.props.fetchWords(this.props.language.id, 'all');
  }

  render() {
    const words = this.props.words.list || [];
    return (
      <div>
        <h2>Words</h2>
        <WordsList list={words}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return ({
		language: state.language,
    words: state.words
	});
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators(wordsActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Words);
