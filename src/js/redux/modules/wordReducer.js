import { FETCH_WORD_START, RECEIVE_WORD, FETCH_WORD_ERROR  } from '../../actions/word';

const wordReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_WORD_START:
      return {
        ...state,
        fetching: true
      };

    case RECEIVE_WORD:
      return {
        ...state,
        ...action.payload,
        fetching: false
      };

    case FETCH_WORD_ERROR:
      return {
        ...state,
        error: action.payload,
        fetching: false
      };

    default:
      return state;
  }
}

export default wordReducer;
