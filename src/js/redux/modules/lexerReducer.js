
import {
  LEXER_ADD,
  LEXER_EDIT,
  LEXER_DELETE,
  LEXER_MODAL_DELETE_SHOW,
  LEXER_MODAL_DELETE_HIDE } from '../../constants';
import {
  SAVING_LEXER_START,
  SAVING_LEXER_ERROR,
  SAVE_LEXER_SUCCESS,
  ADD_TO_CATEGORY,
  LEXER_ON_EDIT } from '../../actions/lexer';

const lexerReducer = (state = {id:0,name:'',descr:''}, action) => {
  switch (action.type) {
    case LEXER_ADD:
      const id = Number((Math.random() * 1000000).toPrecision(6));
      var new_state = JSON.parse(JSON.stringify(state));
      new_state.list.push({
        id: id,
        name: action.name,
        descr: action.descr
      });
      return new_state;

    case LEXER_EDIT:
      var new_state = JSON.parse(JSON.stringify(state));
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
      var new_state = JSON.parse(JSON.stringify(state));
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

    case SAVING_LEXER_START:
      return {
        ...state,
        inprogress: true
      };

    case SAVING_LEXER_ERROR:
      return {
        ...state,
        inprogress: false,
        error: action.payload
      };

    case SAVE_LEXER_SUCCESS:
      return {
        ...state,
        inprogress: false,
        payload: action.payload
      };

    case ADD_TO_CATEGORY:
      return {
        category: {
          id: action.payload.id,
          name: action.payload.name,
          descr: action.payload.descr
        },
        type: 'add'
      };

    case LEXER_ON_EDIT:
      console.log('reducer lexer_on_edit');
      return {
        ...action.payload,
        type: 'edit'
      };

    default:
      return state;
  }
};

export default lexerReducer;
