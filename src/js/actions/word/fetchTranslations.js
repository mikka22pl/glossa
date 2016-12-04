import axios from 'axios';
import config from '../headers';

export const FETCH_TRANSLATIONS_START = 'FETCH_TRANSLATIONS_START';
export const RECEIVE_TRANSLATIONS = 'RECEIVE_TRANSLATIONS';
export const FETCH_TRANSLATIONS_ERROR = 'FETCH_TRANSLATIONS_ERROR';

export function fetchTranslations(wordId) {
  return function(dispatch) {
    dispatch({type: FETCH_TRANSLATIONS_START});
    return axios({
      url: 'http://localhost:8080/glossa/translations/word/' + wordId,
      config: config,
      timeout: 20000,
      method: 'get'
    }).then((response) => {
      // dispatch(saveTranslation())
      dispatch({type: RECEIVE_TRANSLATIONS});
    }).catch ((error) => {
      console.log('error', error);
      dispatch({type: FETCH_TRANSLATIONS_ERROR, payload: error});
    });
  }
}
