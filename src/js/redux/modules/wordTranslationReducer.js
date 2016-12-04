import {
  SAVE_WORD_TRANSLATION_START,
  SAVE_WORD_TRANSLATION_FULFILLED,
  SAVE_WORD_TRANSLATION_ERROR } from '../../actions/word/saveTranslation';

const wordReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_WORD_TRANSLATION_START:
      return {
        ...state,
        pending: true
      };

    case SAVE_WORD_TRANSLATION_FULFILLED:
      return {
        ...state,
        pending: false
      };

    case SAVE_WORD_TRANSLATION_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload
      };

    default:
      return state;
  }
}
