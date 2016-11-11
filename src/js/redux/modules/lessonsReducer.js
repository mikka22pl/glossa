import { FETCH_LESSONS_START, FETCH_LESSONS_ERROR, RECEIVE_LESSONS } from '../../actions/lesson';

const coursesReducer = (state = {courses: []}, action) => {
  switch (action.type) {
    case FETCH_LESSONS_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_LESSONS_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case RECEIVE_LESSONS:
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
