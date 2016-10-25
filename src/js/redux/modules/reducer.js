import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";

import { CHOOSE_LANGUAGE, LEXER_ADD, LEXER_EDIT, LEXER_DELETE,
  LEXER_MODAL_DELETE_SHOW, LEXER_MODAL_DELETE_HIDE } from '../../constants';

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
  let new_state = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case LEXER_ADD:
      const id = Number((Math.random() * 1000000).toPrecision(6));
      new_state.list.push({
        id: id,
        name: action.name,
        descr: action.descr
      });
      return new_state;

    case LEXER_EDIT:
      for (const lexer of new_state.list) {
        if (lexer.id === action.id) {
          Object.assign(lexer, {
            name: action.name,
            descr: action.descr
          });
          break
        }
      }
      return new_state;

    case LEXER_DELETE:
      for (let index in new_state.list) {
        if (new_state.list[index].id === action.id) {
          new_state.list.splice(index, 1);
          break;
        }
      }
      return new_state;

    case LEXER_MODAL_DELETE_SHOW:
      return {
        ...state,
        modal: {
          list_delete: {
            show: true,
            id: action.id,
            name: action.name
          }
        }
      };

    case LEXER_MODAL_DELETE_HIDE:
      return {
        ...state,
        modal: {
          list_delete: {
            show: false,
            id: 0,
            name: ''
          }
        }
      };

    default:
      return state;
  }
};

export default combineReducers({
  languageReducer,
  form: formReducer,
  lexers: lexerReducer,
  routing: routerReducer
});
