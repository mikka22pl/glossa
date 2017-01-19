import axios from 'axios';
import config from '../headers';

export const INCLUDE_CATEGORY_START = 'INCLUDE_CATEGORY_START';
export const INCLUDE_CATEGORY_FULFILLED = 'INCLUDE_CATEGORY_FULFILLED';
export const INCLUDE_CATEGORY_ERROR = 'INCLUDE_CATEGORY_ERROR';

export function includeCategory(wordId, categoryId) {
  return function(dispatch) {
    dispatch({type: INCLUDE_CATEGORY_START});
    const data = {
      wordId: wordId,
      lexerId: categoryId
    }
    return axios({
      url: 'http://localhost:8080/glossa/word/include/category',
      config: config,
      timeout: 20000,
      method: 'post',
      data: data
    }).then((response) => {
      // dispatch(saveTranslation())
      dispatch({type: INCLUDE_CATEGORY_FULFILLED, payload: response.data});
    }).catch ((error) => {
      console.log('error', error);
      dispatch({type: INCLUDE_CATEGORY_ERROR, payload: error});
    });
  }
}
