import axios from 'axios';
import config from '../headers';
import _ from 'lodash';

export const SAVE_SLOTSPECS_START = 'SAVE_SLOTSPECS_START';
export const SAVE_SLOTSPECS_FULFILLED = 'SAVE_SLOTSPECS_FULFILLED';
export const SAVE_SLOTSPECS_ERROR = 'SAVE_SLOTSPECS_ERROR';

export function saveSentenceTranslation(data) {
  console.log('data', data);
  const getFixedWordId = (array) => {
    const head = _.head(array);
    return head ? head.fixedWordId ? _.toNumber(head.fixedWordId) : null : null;
  };
  const postData = {
    id: data.id,
    name: data.name,
    items: data.slots.map((it, idx) => {
      return {
        id: it.id,
        ordering: idx,
        functionWord: { id: it.group },
        type: { id: it.type },
        templateId: data.id,
        fixedWords: it.fixedWords.map((fw) => {
          return { id: fw.id, slotId: it.id };
        })
      };
    })
  }
  console.log('data after', postData);
  return function(dispatch) {
    dispatch({type: SAVE_SLOTSPECS_START});
    return axios({
      url: 'http://localhost:8080/glossa/slots/save',
      config: config,
      timeout: 20000,
      method: 'post',
      data: postData
    }).then((response) => {
      // dispatch(saveTranslation())
      dispatch({type: SAVE_SLOTSPECS_FULFILLED});
    }).catch ((error) => {
      console.log('error', error);
      dispatch({type: SAVE_SLOTSPECS_ERROR, payload: error});
    });
  }
}
