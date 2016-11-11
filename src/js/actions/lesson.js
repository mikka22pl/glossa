import axios from 'axios';

export const FETCH_LESSONS_START = 'FETCH_LESSONS_START';
export function getLessons() {
  return {
    type: FETCH_LESSONS_START
  };
}
export const FETCH_LESSONS_ERROR = 'FETCH_LESSONS_ERROR';
export function getLessonsError(error) {
  return {
    type: FETCH_LESSONS_ERROR,
    payload: error
  };
}

export const RECEIVE_LESSONS = 'RECEIVE_LESSONS';
export function receiveLessons(json) {
  return {
    type: RECEIVE_LESSONS,
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

export function fetchLessons(courseId) {
  return function(dispatch) {
    // first dispatch: the app state is updated to inform that the API call is starting
    dispatch(getLessons());

    return axios({
      url: 'http://localhost:8080/lessons/' + courseId,
      config: config,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    }).then((response) => {
      //let arr = Array.prototype.slice.call(response.data);
      //  console.log(arr);
      dispatch(receiveLessons(response.data));
    }).catch((error) => {
      console.log('error: ', error);
      dispatch(getLessonsError(error));
    });
  }
}
