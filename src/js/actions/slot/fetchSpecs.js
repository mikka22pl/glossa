import axios from 'axios';
import config from '../headers';

export const FETCH_SLOTSPECS_START = 'FETCH_SLOTSPECS_START';
export const FETCH_SLOTSPECS_ERROR = 'FETCH_SLOTSPECS_ERROR';
export const RECEIVE_SLOTSPECS = 'RECEIVE_SLOTSPECS';
function getSlotspecs() {
  return {type: FETCH_SLOTSPECS_START};
}
function getSlotspecsError(error) {
  return {
    type: FETCH_SLOTSPECS_ERROR,
    payload: error
  };
}
function receiveSlotspecs(json, ordering) {
  return {
    type: RECEIVE_SLOTSPECS,
    payload: json,
    ordering,
    receiveAt: Date.now()
  }
}

export function fetchSpecs(templateId, ordering) {
  return function(dispatch) {
    // first dispatch: the app state is updated to inform that the API call is starting
    dispatch(getSlotspecs());

    return axios({
      url: 'http://localhost:8080/glossa/slot/params/' + templateId + '/' + ordering,
      config: config,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    }).then((response) => {
      //let arr = Array.prototype.slice.call(response.data);
      dispatch(receiveSlotspecs(response.data, ordering));
    }).catch((error) => {
      console.log('error: ', error);
      dispatch(getSlotspecsError(error));
    });
  }
}
