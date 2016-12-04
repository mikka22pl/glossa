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
    this.showAllToggle = this.showAllToggle.bind(this);
    this.chooseWord = this.chooseWord.bind(this);
    this.chooseFunc = this.chooseFunc.bind(this);
    this.chooseCat = this.chooseCat.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.removeLexer = this.removeLexer.bind(this);
  }

  componentWillMount() {
    this.props.wordsActions.fetchWordsWithGroups(this.props.language.id);
    this.props.lexerActions.fetchLexersFunc(LEXER_FUNCTIONS_ID);
    this.props.lexerActions.fetchLexersCats(LEXER_CATEGORY_ID);
  }

  showAllToggle(e) {
    //console.log('check', e.target);
  }

  chooseWord(id) {
    const indx = _.findIndex(this.props.words.list, ['id', id]);
    this.assignee.word = {...this.props.words.list[indx]};
    this.assignee.func = {};
    this.assignee.cats = [];
  }

  chooseFunc(id) {
    const indx = _.findIndex(this.props.lexers.functions.list, ['id', id]);
    this.assignee.func = {...this.props.lexers.functions.list[indx], categoryType: 'F'};
    this.props.lexerActions.clearLexersFunc(id);
  }

  chooseCat(id) {
    let { cats } = this.assignee;
    const { list } = this.props.lexers.categories;
    const indx = _.findIndex(list, ['id', id]);
    const y = _.findIndex(cats, ['id', id]);
    if (y !== -1) {
      cats = cats.slice(0, y).concat(cats.slice(y+1));
    } else {
      cats.push(list[indx]);
      cats = cats.map(function(item) {
        return {...item, categoryType: 'C'}
      });
    }
    this.assignee.cats = cats;
    this.props.lexerActions.clearLexersCats(id);
  }

  saveHandler(e) {
    e.preventDefault();
    this.props.wordsActions.assignFunction(this.assignee);
    this.props.lexerActions.clearLexersFunc();
    this.props.lexerActions.clearLexersCats();
  }

  removeLexer(id, wordId) {
    console.log('words', id);
    this.props.wordsActions.removeLexer(id, wordId);
  }

  render() {
    const words = this.props.words.list || [];
    const error = this.props.words.error || {};
    const response = error.response || {};
    const data = response.data || {};
    return (
      <div>
        <h2>Words</h2>
        <div class="row">
          <div class="col-sm-8">
            <div>
              {data.message}
            </div>
            <div>
              {JSON.stringify(this.assignee)}
            </div>
            <div>
              <Checkbox name="show_all" label="Show all" onChange={this.showAllToggle} {...this.props} />
              <button onClick={this.saveHandler}>Save</button>
            </div>
            <WordsList list={words} onClick={this.chooseWord} removeLexer={this.removeLexer} />
          </div>
          <div class="col-sm-4">
            <h3>Functions</h3>
            <LexerSimpleList
              ref={(funcChild) => { this._funcChild = funcChild }}
              {...this.props.lexers.functions}
              onClick={this.chooseFunc}
              exclude={true}/>

            <h3>Categories</h3>
            <LexerSimpleList
              ref={(catChild) => { this._catChild = catChild }}
              {...this.props.lexers.categories}
              onClick={this.chooseCat}
              exclude={false}/>
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
