import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";

import lexerReducer from './lexerReducer';
import languageReducer from './languageReducer';
import languagesReducer from './languagesReducer';
import courseReducer from './courseReducer';

export default combineReducers({
  language: languageReducer,
  languages: languagesReducer,
  lexers: lexerReducer,
  course: courseReducer,
  form: formReducer,
  routing: routerReducer
});
