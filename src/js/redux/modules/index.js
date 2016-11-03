import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";

import lexerReducer from './lexerReducer';
import languageReducer from './languageReducer';
import languagesReducer from './languagesReducer';

export default combineReducers({
  language: languageReducer,
  languages: languagesReducer,
  lexers: lexerReducer,
  form: formReducer,
  routing: routerReducer
});
