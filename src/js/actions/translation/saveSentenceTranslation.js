import axios from 'axios';
import config from '../headers';

export const SAVE_SENTENCE_TRANSLATION_START = 'SAVE_SENTENCE_TRANSLATION_START';
export const SAVE_SENTENCE_TRANSLATION_FULFILLED = 'SAVE_SENTENCE_TRANSLATION_FULFILLED';
export const SAVE_SENTENCE_TRANSLATION_ERROR = 'SAVE_SENTENCE_TRANSLATION_ERROR';

export function saveSentenceTranslation(id, words, translation) {
  return function(dispatch) {
    dispatch({type: SAVE_SENTENCE_TRANSLATION_START});
    const data = {
      id: id,
      sentence: words,
      translation: translation
    }
    return axios({
      url: 'http://localhost:8080/glossa/translation/add',
      config: config,
      timeout: 20000,
      method: 'post',
      data: data
    }).then((response) => {
      // dispatch(saveTranslation())
      dispatch({type: SAVE_SENTENCE_TRANSLATION_FULFILLED});
    }).catch ((error) => {
      console.log('error', error);
      dispatch({type: SAVE_SENTENCE_TRANSLATION_ERROR, payload: error});
    });
  }
}
