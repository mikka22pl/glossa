import {
  FETCH_SENTENCE_TRANSLATION_START,
  FETCH_SENTENCE_TRANSLATION_FULFILLED,
  FETCH_SENTENCE_TRANSLATION_ERROR
} from '../../actions/translation/fetchSentenceTranslation';

const sentenceTranslationReducer = (state = {translation: {}}, action) => {
  switch (action.type) {
    case FETCH_SENTENCE_TRANSLATION_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_SENTENCE_TRANSLATION_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case FETCH_SENTENCE_TRANSLATION_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        translation: action.payload,
        receiveAt: action.receiveAt
      };
    default:
      return state;
  }
};

export default sentenceTranslationReducer;
