import { combineReducers } from 'redux';
//import { reducer as form } from 'redux-form';
import { routerReducer } from "react-router-redux";

import { CHOOSE_LANGUAGE } from '../../constants';

const languageReducer = (state = {}, action) => {
  console.log('language reducer', action.type);
  switch (action.type) {
    case CHOOSE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    default:
      return state;
  }
};

const lexerReducer = (state = {}, action) => {
  return state;
};

export default combineReducers({
  languageReducer,
  lexers: lexerReducer,
  routing: routerReducer
});
