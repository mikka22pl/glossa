import axios from 'axios';

export const FETCH_COURSES_START = 'FETCH_COURSES_START';
export function getCourses() {
  return {
    type: FETCH_COURSES_START
  };
}
export const FETCH_COURSES_ERROR = 'FETCH_COURSES_ERROR';
export function getCoursesError(error) {
  return {
    type: FETCH_COURSES_ERROR,
    payload: error
  };
}

export const RECEIVE_COURSES = 'RECEIVE_COURSES';
export function receiveCourses(json) {
  return {
    type: RECEIVE_COURSES,
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

export function fetchCourses(languageId) {
  return function(dispatch) {
    // first dispatch: the app state is updated to inform that the API call is starting
    dispatch(getCourses());

    return axios({
      url: 'http://localhost:8080/courses/' + languageId,
      config: config,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    }).then((response) => {
      //let arr = Array.prototype.slice.call(response.data);
      //  console.log(arr);
      dispatch(receiveCourses(response.data));
    }).catch((error) => {
      console.log('error: ', error);
      dispatch(getCoursesError(error));
    });
  }
}
