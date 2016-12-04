import axios from 'axios';

export const FETCH_WORDS_START = 'FETCH_WORDS_START';
export function getWords() {
  return {
    type: FETCH_WORDS_START
  };
}
export const FETCH_WORDS_ERROR = 'FETCH_WORDS_ERROR';
export function getWordsError(error) {
  return {
    type: FETCH_WORDS_ERROR,
    payload: error
  };
}

export const RECEIVE_WORDS = 'RECEIVE_WORDS';
export function receiveWords(json) {
  return {
    type: RECEIVE_WORDS,
    payload: json,
    receiveAt: Date.now()
  }
}

export const ASSIGN_FUNCTION_START = 'ASSIGN_FUNCTION_START';
function assignFunctionStartAction(assignee) {
  return {
    type: ASSIGN_FUNCTION_START,
    payload: assignee
  }
}
export const ASSIGN_FUNCTION = 'ASSIGN_FUNCTION';
function assignFunctionAction(json) {
  return {
    type: ASSIGN_FUNCTION,
    payload: json
  }
}
export const ASSIGN_FUNCTION_ERROR = 'ASSIGN_FUNCTION_ERROR';
function assignFunctionErrorAction(error) {
  return {
    type: ASSIGN_FUNCTION_ERROR,
    payload: error
  }
}

export const REMOVE_WORD_CATEGORY = 'REMOVE_WORD_CATEGORY';
function removeCategoryAction(json) {
  return {
    type: REMOVE_WORD_CATEGORY,
    payload: json
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

export function fetchWords(languageId, limit = null) {
  return function(dispatch) {
    // first dispatch: the app state is updated to inform that the API call is starting
    dispatch(getWords());

    const url = limit === 'top10' ? limit + '/' + languageId : languageId;
    console.log(url);
    return axios({
      url: 'http://localhost:8080/glossa/words/' + url,
      config: config,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    }).then((response) => {
      //let arr = Array.prototype.slice.call(response.data);
      //  console.log(arr);
      dispatch(receiveWords(response.data));
    }).catch((error) => {
      console.err('error: ', error);
      dispatch(getWordsError(error));
    });
  }
}

export function fetchWordsWithGroups(languageId) {
  return function(dispatch) {
    dispatch(getWords());
    return axios({
      url: 'http://localhost:8080/glossa/words/group/' + languageId,
      config: config,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    }).then ((response) => {
      dispatch(receiveWords(response.data));
    }).catch((error) => {
      console.log('error', error);
      dispatch(getWordsError(error));
    })
  }
}

export function saveWord(id, word, languageId) {
  return function(dispatch) {
    return axios({
      url: 'http://localhost:8080/glossa/addWord',
      config: config,
      timeout: 20000,
      method: 'post',
      data: {id: id, name: word, languageId: languageId}
    }).then((response) => {
      //dispatch(saveWord())
    }).catch ((error) => {
      console.err('error ', error);
    });
  }
}

export function assignFunction(assignee) {
  return function(dispatch) {
    console.log('assignee', assignee);
    const categories = assignee.func && assignee.func.id ?
        [...assignee.cats, assignee.func] :
        assignee.cats;
    let word = {
      ...assignee.word,
      categories
    };
    /*word.categories = assignee.cats;
    if (assignee.func && assignee.func.id) {
      word.categories.push(assignee.func);
    }*/
    word.func = {};
    return axios({
      url: 'http://localhost:8080/glossa/assignWord',
      config: config,
      timeout: 20000,
      method: 'post',
      data: word
    }).then((response) => {
      //dispatch(assignFunctionAction(word));
      dispatch(assignFunctionAction(word));
    }).catch ((error) => {
      // console.err('error ', error);
      dispatch(assignFunctionErrorAction(error));
    });
  }
}
export function removeLexer(id, wordId) {
  return function (dispatch) {
    const data = {lexerId: id, wordId: wordId};
    return axios({
      url: 'http://localhost:8080/glossa/removeLexer',
      config: config,
      timeout: 20000,
      method: 'post',
      data: data
    }).then((response) => {
      dispatch(removeCategoryAction(data));
    }).catch((error) => {
      console.log('error', error);
    });
  }
}
