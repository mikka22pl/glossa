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

export default combineReducers({
  languageReducer,
  routing: routerReducer
});
