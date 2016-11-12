import { FETCH_STRUCTURE_START, FETCH_STRUCTURE_ERROR, RECEIVE_STRUCTURES } from '../../actions/structures';

const structuresReducer = (state = {structures: []}, action) => {
  switch (action.type) {
    case FETCH_STRUCTURE_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_STRUCTURE_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case RECEIVE_STRUCTURES:
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

export default structuresReducer;
