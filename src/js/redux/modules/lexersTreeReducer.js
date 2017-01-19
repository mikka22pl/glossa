import _ from 'lodash';
import {
  FETCH_LEXERSTREE_START,
  FETCH_LEXERSTREE_ERROR,
  RECEIVE_LEXERSTREE } from '../../actions/lexersTree/fetchLexersTree';

const lexersTreeReducer = (state = {list:{}}, action) => {
  switch (action.type) {
    case FETCH_LEXERSTREE_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_LEXERSTREE_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case RECEIVE_LEXERSTREE:
      const newArray = _.keyBy(action.payload, (item) => {
        return item.name;
      });
      return {
        ...state,
        fetching: false,
        fetched: true,
        list: newArray,
        receiveAt: action.receiveAt
      };
    default:
      return state;
  }
};

export default lexersTreeReducer;
