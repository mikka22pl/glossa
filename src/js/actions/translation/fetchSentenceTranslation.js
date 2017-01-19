import axios from 'axios';
import config from '../headers';

export const FETCH_SENTENCE_TRANSLATION_START = 'FETCH_SENTENCE_TRANSLATION_START';
export const FETCH_SENTENCE_TRANSLATION_FULFILLED = 'FETCH_SENTENCE_TRANSLATION_FULFILLED';
export const FETCH_SENTENCE_TRANSLATION_ERROR = 'FETCH_SENTENCE_TRANSLATION_ERROR';

export function fetchSentenceTranslation(id, words) {
  console.log('id' + id);
  return function(dispatch) {
    dispatch({type: FETCH_SENTENCE_TRANSLATION_START});
    const data = {
      id: id,
      sentence: words
    }
    return axios({
      url: 'http://localhost:8080/glossa/sentence/translation/',
      config: config,
      timeout: 20000,
      method: 'post',
      data: data
    }).then((response) => {
      // dispatch(saveTranslation())
      dispatch({type: FETCH_SENTENCE_TRANSLATION_FULFILLED, payload: response.data});
    }).catch ((error) => {
      console.log('error', error);
      dispatch({type: FETCH_SENTENCE_TRANSLATION_ERROR, payload: error});
    });
  }
}
