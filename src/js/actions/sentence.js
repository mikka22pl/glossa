import axios from 'axios';

export const FETCH_SENTENCE_START = 'FETCH_SENTENCE_START';
export function getSentence() {
  return {
    type: FETCH_SENTENCE_START
  };
}
export const FETCH_SENTENCE_ERROR = 'FETCH_SENTENCE_ERROR';
export function getSentenceError(error) {
  return {
    type: FETCH_SENTENCE_ERROR,
    payload: error
  };
}

export const RECEIVE_SENTENCE = 'RECEIVE_SENTENCE';
export function receiveSentence(json) {
  return {
    type: RECEIVE_SENTENCE,
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

export function fetchSentence(template) {
  return function(dispatch) {
    // first dispatch: the app state is updated to inform that the API call is starting
    dispatch(getSentence());

    return axios({
      url: 'http://localhost:8080/glossa/learn/',
      config: config,
      timeout: 20000,
      method: 'post',
      data: template,
      responseType: 'json'
    }).then((response) => {
      //let arr = Array.prototype.slice.call(response.data);
      //  console.log(arr);
      dispatch(receiveSentence(response.data));
    }).catch((error) => {
      console.log('error: ', error);
      dispatch(getSentenceError(error));
    });
  }
}
