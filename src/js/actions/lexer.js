import axios from 'axios';

export const FETCH_LEXERS_START = 'FETCH_LEXERS_START';
export const FETCH_LEXERS_FUNC_START = 'FETCH_LEXERS_FUNC_START';
export const FETCH_LEXERS_CAT_START = 'FETCH_LEXERS_CAT_START';
export function getLexers(actionType) {
  return {
    type: actionType
  };
}
export const FETCH_LEXERS_ERROR = 'FETCH_LEXERS_ERROR';
export const FETCH_LEXERS_FUNC_ERROR = 'FETCH_LEXERS_FUNC_ERROR';
export const FETCH_LEXERS_CAT_ERROR = 'FETCH_LEXERS_CAT_ERROR';
export function getLexersError(error, actionType) {
  return {
    type: actionType,
    payload: error
  };
}

export const RECEIVE_LEXERS = 'RECEIVE_LEXERS';
export const RECEIVE_LEXERS_FUNC = 'RECEIVE_LEXERS_FUNC';
export const RECEIVE_LEXERS_CAT = 'RECEIVE_LEXERS_CAT';
export function receiveLexers(json, actionType) {
  return {
    type: actionType,
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

function fetch(url, startAction, receiveAction, errorAction) {
  return function(dispatch) {
    // first dispatch: the app state is updated to inform that the API call is starting
    dispatch(getLexers(startAction));

    // const url = param ? 'bycategory/' + param : '';

    return axios({
      url: 'http://localhost:8080/glossa/lexers' + url,
      config: config,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    }).then((response) => {
      //let arr = Array.prototype.slice.call(response.data);
      //  console.log(arr);
      dispatch(receiveLexers(response.data, receiveAction));
    }).catch((error) => {
      console.log('error: ', error);
      dispatch(getLexersError(error, errorAction));
    });
  }
}
export function fetchLexers(categoryId) {
  // console.log('fetchLexers()', categoryId);
  const url = categoryId ? '/bycategory/' + categoryId : '/';
  return fetch(url, FETCH_LEXERS_START, RECEIVE_LEXERS, FETCH_LEXERS_ERROR);
}
export function fetchLexersFunc(categoryId) {
  const url = '/bycategory/' + categoryId;
  return fetch(url, FETCH_LEXERS_FUNC_START, RECEIVE_LEXERS_FUNC, FETCH_LEXERS_FUNC_ERROR);
}
export function fetchLexersCats(categoryId) {
  const url = '/bycategory/' + categoryId;
  return fetch(url, FETCH_LEXERS_CAT_START, RECEIVE_LEXERS_CAT, FETCH_LEXERS_CAT_ERROR);
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

export const CLEAR_LEXERS_FUNC = 'CLEAR_LEXERS_FUNC';
export function clearLexersFunc(id) {
  return (dispatch) => {
    dispatch({
      type: CLEAR_LEXERS_FUNC,
      payload: id
    })
  }
}
export const CLEAR_LEXERS_CATS = 'CLEAR_LEXERS_CATS';
export function clearLexersCats(id) {
  return (dispatch) => {
    dispatch({
      type: CLEAR_LEXERS_CATS,
      payload: id
    })
  }
}
