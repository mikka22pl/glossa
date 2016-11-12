import { FETCH_SENTENCE_START, FETCH_SENTENCE_ERROR, RECEIVE_SENTENCE } from '../../actions/sentence';

const sentenceReducer = (state = {sentence: {words:[]}}, action) => {
  switch (action.type) {
    case FETCH_SENTENCE_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_SENTENCE_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case RECEIVE_SENTENCE:
      return {
        ...state,
        fetching: false,
        fetched: true,
        words: action.payload.words,
        receiveAt: action.receiveAt
      };
    default:
      return state;
  }
};

export default sentenceReducer;
