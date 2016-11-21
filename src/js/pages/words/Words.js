import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import * as wordsActions from '../../actions/word';
import WordsList from '../../components/WordsList';
import Checkbox from '../../components/forms/Checkbox';

class Words extends React.Component {
  componentWillMount() {
    this.props.fetchWordsWithGroups(this.props.language.id);
    this.showAllToggle = this.showAllToggle.bind(this);
  }

  showAllToggle(e) {
    console.log('check', e.target);
  }

  render() {
    const words = this.props.words.list || [];
    return (
      <div>
        <h2>Words</h2>
        <div>
          <Checkbox name="show_all" label="Show all" onChange={this.showAllToggle} {...this.props} />
        </div>
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
