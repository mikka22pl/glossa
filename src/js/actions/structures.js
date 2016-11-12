import axios from 'axios';

export const FETCH_STRUCTURE_START = 'FETCH_STRUCTURE_START';
export function getStructures() {
  return {
    type: FETCH_STRUCTURE_START
  };
}
export const FETCH_STRUCTURE_ERROR = 'FETCH_STRUCTURE_ERROR';
export function getStructuresError(error) {
  return {
    type: FETCH_STRUCTURE_ERROR,
    payload: error
  };
}

export const RECEIVE_STRUCTURES = 'RECEIVE_STRUCTURES';
export function receiveStructures(json) {
  return {
    type: RECEIVE_STRUCTURES,
    payload: json,
    receiveAt: Date.now()
  }
}

var config = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers':'*',
    'Access-Control-Allow-Origin' : 'http://localhost:8080',
    'X-Requested-With': 'XMLHttpRequest'
  }
};

export function fetchStructures(languageId, lessonId) {
  return function(dispatch) {
    // first dispatch: the app state is updated to inform that the API call is starting
    dispatch(getStructures());

    return axios({
      url: 'http://localhost:8080/struct/' + languageId + '/' + lessonId,
      config: config,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    }).then((response) => {
      //let arr = Array.prototype.slice.call(response.data);
      //  console.log(arr);
      dispatch(receiveStructures(response.data));
    }).catch((error) => {
      console.log('error: ', error);
      dispatch(getStructuresError(error));
    });
  }
}
