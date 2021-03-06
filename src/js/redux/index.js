import { applyMiddleware, compose, createStore } from 'redux';
import { browserHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import reducer from './modules';
//import languages from '../data/languages';
import lexers from '../data/lexers';

const initialState = {
  language: null,
  languages: {list:[]},
  lexer: {id:0, name:'', descr:''},
  lexers: {list: []},
  courses: {list:[]},
  course: null,
  lessons: {list: []},
  lesson: null,
  sentence: {},
  templates: {list: []},
  template: {details:{}},
  words: {list: []},
  word: {},
  wordTranslation: {}
}

const enhancers = compose(
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(browserHistory)
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default createStore(reducer, initialState, enhancers);
