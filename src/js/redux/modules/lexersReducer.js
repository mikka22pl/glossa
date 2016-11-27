import {
  FETCH_LEXERS_START, FETCH_LEXERS_ERROR, RECEIVE_LEXERS,
  FETCH_LEXERS_FUNC_START,
  FETCH_LEXERS_FUNC_ERROR,
  RECEIVE_LEXERS_FUNC,
  FETCH_LEXERS_CAT_START,
  FETCH_LEXERS_CAT_ERROR,
  RECEIVE_LEXERS_CAT
} from '../../actions/lexer';

const lexersReducer = (state = {structures: []}, action) => {
  switch (action.type) {
    case FETCH_LEXERS_START:
      return {
        lexers: {
          ...state,
          fetching: true
        }
      };
    case FETCH_LEXERS_ERROR:
      return {
        lexers: {
          ...state,
          fetching: false,
          error: action.payload
        }
      };
    case RECEIVE_LEXERS:
      return {
        lexers: {
          ...state,
          fetching: false,
          list: action.payload,
          receiveAt: action.receiveAt
        }
      };
    case FETCH_LEXERS_FUNC_START:
      return {
        ...state,
        functions: {
          ...state.functions,
          fetching: true
        }
      };
    case FETCH_LEXERS_FUNC_ERROR:
      return {
        ...state,
        functions: {
          ...state.functions,
          fetching: false,
          error: action.payload
        }
      };
    case RECEIVE_LEXERS_FUNC:
      return {
        ...state,
        functions: {
          ...state.functions,
          fetching: false,
          list: action.payload,
          receiveAt: action.receiveAt
        }
      };
    case FETCH_LEXERS_CAT_START:
      return {
        ...state,
        categories: {
          ...state.categories,
          fetching: true
        }
      };
    case FETCH_LEXERS_CAT_ERROR:
      return {
        ...state,
        categories: {
          ...state.categories,
          fetching: false,
          error: action.payload
        }
      };
    case RECEIVE_LEXERS_CAT:
      return {
        ...state,
        categories: {
          ...state.categories,
          fetching: false,
          list: action.payload,
          receiveAt: action.receiveAt
        }
      };
    default:
      return state;
  }
};

export default lexersReducer;
