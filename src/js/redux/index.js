import { applyMiddleware, compose, createStore } from 'redux';
import { browserHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './modules';
import languages from '../data/languages';
import lexers from '../data/lexers';

const initialState = {
  language: null,
  languages: languages,
  lexers: lexers
}

const enhancers = compose(
  applyMiddleware(routerMiddleware(browserHistory)),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default createStore(reducer, initialState, enhancers);
