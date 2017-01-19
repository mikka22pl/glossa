import axios from 'axios';
import config from '../headers';

export const FETCH_LEXERSTREE_START = 'FETCH_LEXERSTREE_START';
export const FETCH_LEXERSTREE_ERROR = 'FETCH_LEXERSTREE_ERROR';
export const RECEIVE_LEXERSTREE = 'RECEIVE_LEXERSTREE';
function getLexersTree() {
  return {type: FETCH_LEXERSTREE_START};
}
function getLexersTreeError(error) {
  return {
    type: FETCH_LEXERSTREE_ERROR,
    payload: error
  };
}
function receiveLexersTree(json) {
  return {
    type: RECEIVE_LEXERSTREE,
    payload: json,
    receiveAt: Date.now()
  }
}

export function fetchLexersTree() {
  return function(dispatch) {
    // first dispatch: the app state is updated to inform that the API call is starting
    dispatch(getLexersTree());

    return axios({
      url: 'http://localhost:8080/glossa/lexers/tree/',
      config: config,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    }).then((response) => {
      //let arr = Array.prototype.slice.call(response.data);
      dispatch(receiveLexersTree(response.data));
    }).catch((error) => {
      console.log('error: ', error);
      dispatch(getLexersTreeError(error));
    });
  }
}
