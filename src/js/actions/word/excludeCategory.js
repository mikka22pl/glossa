import axios from 'axios';
import config from '../headers';

export const EXCLUDE_CATEGORY_START = 'EXCLUDE_CATEGORY_START';
export const EXCLUDE_CATEGORY_FULFILLED = 'EXCLUDE_CATEGORY_FULFILLED';
export const EXCLUDE_CATEGORY_ERROR = 'EXCLUDE_CATEGORY_ERROR';

export function excludeCategory(wordId, categoryId) {
  return function(dispatch) {
    dispatch({type: EXCLUDE_CATEGORY_START});
    const data = {
      wordId: wordId,
      lexerId: categoryId
    }
    return axios({
      url: 'http://localhost:8080/glossa/word/exclude/category',
      config: config,
      timeout: 20000,
      method: 'post',
      data: data
    }).then((response) => {
      // dispatch(saveTranslation())
      dispatch({type: EXCLUDE_CATEGORY_FULFILLED, payload: categoryId});
    }).catch ((error) => {
      console.log('error', error);
      dispatch({type: EXCLUDE_CATEGORY_ERROR, payload: error});
    });
  }
}
