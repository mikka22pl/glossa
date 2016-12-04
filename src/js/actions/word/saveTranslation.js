import axios from 'axios';
import config from '../headers';

export const SAVE_WORD_TRANSLATION_START = 'SAVE_WORD_TRANSLATION_START';
export const SAVE_WORD_TRANSLATION_FULFILLED = 'SAVE_WORD_TRANSLATION_FULFILLED';
export const SAVE_WORD_TRANSLATION_ERROR = 'SAVE_WORD_TRANSLATION_ERROR';

export function saveTranslation(id, translation) {
  return function(dispatch) {
    dispatch({type: SAVE_WORD_TRANSLATION_START});
    const data = {
      word: {id: id},
      entries: [{name: translation}]
    }
    return axios({
      url: 'http://localhost:8080/glossa/add/translation',
      config: config,
      timeout: 20000,
      method: 'post',
      data: data
    }).then((response) => {
      // dispatch(saveTranslation())
      dispatch({type: SAVE_WORD_TRANSLATION_FULFILLED});
    }).catch ((error) => {
      console.log('error', error);
      dispatch({type: SAVE_WORD_TRANSLATION_ERROR, payload: error});
    });
  }
}
