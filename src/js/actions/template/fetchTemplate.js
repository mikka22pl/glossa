import axios from 'axios';
import config from '../headers';

export const FETCH_TEMPLATE_START = 'FETCH_TEMPLATE_START';
export const FETCH_TEMPLATE_ERROR = 'FETCH_TEMPLATE_ERROR';
export const RECEIVE_TEMPLATE = 'RECEIVE_TEMPLATE';

function getTemplate() {
  return {
    type: FETCH_TEMPLATE_START
  };
}
function getTemplateError(error) {
  return {
    type: FETCH_TEMPLATE_ERROR,
    payload: error
  };
}
function receiveTemplate(json) {
  return {
    type: RECEIVE_TEMPLATE,
    payload: json,
    receiveAt: Date.now()
  }
}

export function fetchTemplate(lessonId) {
  return (dispatch) => {
    // first dispatch: the app state is updated to inform that the API call is starting
    dispatch(getTemplate());

    return axios({
      url: 'http://localhost:8080/glossa/template/' + lessonId,
      config: config,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    }).then(
      (response) => dispatch(receiveTemplate(response.data)),
      (error) => {
        console.log('error: ', error);
        dispatch(getTemplateError(error));
      }
    );
  }
}
