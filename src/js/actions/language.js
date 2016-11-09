import axios from 'axios';
import { CHOOSE_LANGUAGE } from '../constants';

export function chooseLanguage(id) {
  return {
    type: CHOOSE_LANGUAGE,
    payload: id
  };
};
export const FETCH_LANGUAGES_START = 'FETCH_LANGUAGES_START';
export function getLanguages() {
  return {
    type: FETCH_LANGUAGES_START
  };
}
export const FETCH_LANGUAGES_ERROR = 'FETCH_LANGUAGES_ERROR';
export function getLanguagesError(error) {
  return {
    type: FETCH_LANGUAGES_ERROR,
    payload: error
  };
}

export const RECEIVE_LANGUAGES = 'RECEIVE_LANGUAGES';
export function receiveLanguages(json) {
  return {
    type: RECEIVE_LANGUAGES,
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

export function fetchLanguages() {
  return function(dispatch) {
    // first dispatch: the app state is updated to inform that the API call is starting
    dispatch(getLanguages());

    return axios({
      url: 'http://localhost:8080/languages',
      config: config,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    }).then((response) => {
      //let arr = Array.prototype.slice.call(response.data);
      //  console.log(arr);
      dispatch(receiveLanguages(response.data));
    }).catch((error) => {
      console.log('error: ', error);
      dispatch(getLanguagesError(error));
    });
  }
}
