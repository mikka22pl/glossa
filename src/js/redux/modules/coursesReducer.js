import { FETCH_COURSES_START, FETCH_COURSES_ERROR, RECEIVE_COURSES } from '../../actions/course';

const coursesReducer = (state = {courses: []}, action) => {
  switch (action.type) {
    case FETCH_COURSES_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_COURSES_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case RECEIVE_COURSES:
      return {
        ...state,
        fetching: false,
        fetched: true,
        list: action.payload,
        receiveAt: action.receiveAt
      };
    default:
      return state;
  }
};

export default coursesReducer;
