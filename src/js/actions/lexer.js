import axios from 'axios';

export const FETCH_LEXERS_START = 'FETCH_LEXERS_START';
export function getLexers() {
  return {
    type: FETCH_LEXERS_START
  };
}
export const FETCH_LEXERS_ERROR = 'FETCH_LEXERS_ERROR';
export function getLexersError(error) {
  return {
    type: FETCH_LEXERS_ERROR,
    payload: error
  };
}

export const RECEIVE_LEXERS = 'RECEIVE_LEXERS';
export function receiveLexers(json) {
  return {
    type: RECEIVE_LEXERS,
    payload: json,
    receiveAt: Date.now()
  }
}

export const ADD_TO_CATEGORY = 'ADD_TO_CATEGORY';
export function addToCategory(lexer) {
  return {
    type: ADD_TO_CATEGORY,
    payload: lexer
  };
}

export const LEXER_ON_EDIT = 'LEXER_ON_EDIT';
function editLexer(lexer) {
  return {
    type: LEXER_ON_EDIT,
    payload: lexer
  };
}

export function onEditLexer(lexer) {
  return function(dispatch) {
    dispatch(editLexer(lexer));
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

export function fetchLexers(categoryId) {
  console.log('fetchLexers()', categoryId);
  return function(dispatch) {
    // first dispatch: the app state is updated to inform that the API call is starting
    dispatch(getLexers());

    const url = categoryId ? 'bycategory/' + categoryId : '';

    return axios({
      url: 'http://localhost:8080/glossa/lexers/' + url,
      config: config,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    }).then((response) => {
      //let arr = Array.prototype.slice.call(response.data);
      //  console.log(arr);
      dispatch(receiveLexers(response.data));
    }).catch((error) => {
      console.log('error: ', error);
      dispatch(getLexersError(error));
    });
  }
}
export const SAVING_LEXER_START = 'SAVING_LEXER_START';
export function savingLexer(lexer) {
  return {
    type: SAVING_LEXER_START,
  };
}
export const SAVING_LEXER_ERROR = 'SAVING_LEXER_ERROR';
export function savingLexerError(error) {
  return {
    type: SAVING_LEXER_ERROR,
    payload: error
  };
}
export const SAVE_LEXER_SUCCESS = 'SAVE_LEXER_SUCCESS';
export function saveLexerSuccess(json) {
  return {
    type: SAVE_LEXER_SUCCESS,
    payload: json
  }
}
export function saveLexerItem(lexer) {
  return function(dispatch) {
    console.log('saveLexer()' + JSON.stringify(lexer));
    dispatch(savingLexer());
    return axios({
      url: 'http://localhost:8080/glossa/lexer/save',
      config: config,
      timeout: 20000,
      method: 'post',
      data: lexer,
      responseType: 'json'
    }).then((response) => {
      dispatch(saveLexerSuccess(response));
    }).catch((error) => {
      dispatch(savingLexerError(error));
    })
  };
}
