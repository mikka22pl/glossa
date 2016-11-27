import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import * as wordsActions from '../../actions/word';
import * as lexerActions from '../../actions/lexer';
import WordsList from '../../components/words/WordsList';
import LexerSimpleList from '../../components/lexers/LexerSimpleList';
import Checkbox from '../../components/forms/Checkbox';
import { LEXER_FUNCTIONS_ID, LEXER_CATEGORY_ID } from '../../constants';

class Words extends React.Component {
  assignee;

  constructor(props) {
    super(props);
    this.assignee = {
      word: {},
      func: {},
      cats: []
    };
  }

  componentWillMount() {
    this.props.wordsActions.fetchWordsWithGroups(this.props.language.id);
    this.props.lexerActions.fetchLexersFunc(LEXER_FUNCTIONS_ID);
    this.props.lexerActions.fetchLexersCats(LEXER_CATEGORY_ID);
    this.showAllToggle = this.showAllToggle.bind(this);
    this.chooseWord = this.chooseWord.bind(this);
    this.chooseFunc = this.chooseFunc.bind(this);
    this.chooseCat = this.chooseCat.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
  }

  showAllToggle(e) {
    //console.log('check', e.target);
  }

  chooseWord(id) {
    //console.log('choose word', id);
    const indx = _.findIndex(this.props.words.list, ['id', id]);
    this.assignee.word = this.props.words.list[indx];

    // this.state.clear.functions = true;
    // this.state.clear.categories = true;
    this.props.lexers.functions.list.map((item) => {item.on = false});
    this.props.lexers.categories.list.map((item) => {item.on = false});
  }

  chooseFunc(id) {
    //console.log('choose func ', id);
    const indx = _.findIndex(this.props.lexers.functions.list, ['id', id]);
    this.assignee.func = [this.props.lexers.functions.list[indx]];
  }

  chooseCat(id) {
    //console.log('choose cat', id);
    const indx = _.findIndex(this.props.lexers.categories.list, ['id', id]);
    this.assignee.cats.push(this.props.lexers.categories.list[indx]);

  }

  saveHandler(e) {
    e.preventDefault();
    this.props.wordsActions.assignFunction(this.assignee);
  }

  render() {
    const words = this.props.words.list || [];
    return (
      <div>
        <h2>Words</h2>
        <div class="row">
          <div class="col-sm-8">
            <div>
              <Checkbox name="show_all" label="Show all" onChange={this.showAllToggle} {...this.props} />
              <button onClick={this.saveHandler}>Save</button>
            </div>
            <WordsList list={words} onClick={this.chooseWord} />
          </div>
          <div class="col-sm-4">
            <h3>Functions</h3>
            <LexerSimpleList {...this.props.lexers.functions} onClick={this.chooseFunc} exclude={true}/>

            <h3>Categories</h3>
            <LexerSimpleList {...this.props.lexers.categories} onClick={this.chooseCat} exclude={false}/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return ({
		language: state.language,
    lexers: state.lexers,
    words: state.words
	});
}
function mapDispatchToProps(dispatch) {
	return {
    wordsActions: bindActionCreators(wordsActions, dispatch),
    lexerActions: bindActionCreators(lexerActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Words);
