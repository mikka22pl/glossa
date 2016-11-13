import { FETCH_WORDS_START, FETCH_WORDS_ERROR, RECEIVE_WORDS } from '../../actions/word';

const wordsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_WORDS_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_WORDS_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case RECEIVE_WORDS:
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
}

export default wordsReducer;
