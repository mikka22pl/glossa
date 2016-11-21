import { FETCH_LEXERS_START, FETCH_LEXERS_ERROR, RECEIVE_LEXERS } from '../../actions/lexer';

const lexersReducer = (state = {structures: []}, action) => {
  switch (action.type) {
    case FETCH_LEXERS_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_LEXERS_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case RECEIVE_LEXERS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        list: action.payload,
        receiveAt: action.receiveAt
      };
    default:
      return state;
  }
};

export default lexersReducer;
