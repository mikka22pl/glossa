import axios from 'axios';
import config from '../headers';

export const FETCH_TEMPLATES_START = 'FETCH_TEMPLATES_START';
export const FETCH_TEMPLATES_ERROR = 'FETCH_TEMPLATES_ERROR';
export const RECEIVE_TEMPLATES = 'RECEIVE_TEMPLATES';
function getTemplates() {
  return {
    type: FETCH_TEMPLATES_START
  };
}
function getTemplatesError(error) {
  return {
    type: FETCH_TEMPLATES_ERROR,
    payload: error
  };
}
function receiveTemplates(json) {
  return {
    type: RECEIVE_TEMPLATES,
    payload: json,
    receiveAt: Date.now()
  }
}

export function fetchTemplates(lessonId) {
  return function(dispatch) {
    // first dispatch: the app state is updated to inform that the API call is starting
    dispatch(getTemplates());

    return axios({
      url: 'http://localhost:8080/glossa/struct/' + lessonId,
      config: config,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    }).then((response) => {
      //let arr = Array.prototype.slice.call(response.data);
      dispatch(receiveTemplates(response.data));
    }).catch((error) => {
      console.log('error: ', error);
      dispatch(getTemplatesError(error));
    });
  }
}
