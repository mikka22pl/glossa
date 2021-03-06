import { FETCH_LANGUAGES_START, FETCH_LANGUAGES_ERROR, RECEIVE_LANGUAGES } from '../../actions/language';

const languagesReducer = (state = {languages: []}, action) => {
  switch (action.type) {
    case FETCH_LANGUAGES_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_LANGUAGES_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case RECEIVE_LANGUAGES:
      let new_state = {
        ...state,
        fetching: false,
        fetched: true,
        list: action.payload,
        receiveAt: action.receiveAt
      };
      return new_state;
    default:
      return state;
  }
};

export default languagesReducer;
