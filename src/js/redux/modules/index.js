import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";

import lexerReducer from './lexerReducer';
import languageReducer from './languageReducer';


export default combineReducers({
  language: languageReducer,
  form: formReducer,
  lexers: lexerReducer,
  routing: routerReducer
});
