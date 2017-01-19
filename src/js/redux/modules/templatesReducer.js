import {
  FETCH_TEMPLATES_START,
  FETCH_TEMPLATES_ERROR,
  RECEIVE_TEMPLATES } from '../../actions/template/fetchTemplates';

const templatesReducer = (state = {templates: []}, action) => {
  switch (action.type) {
    case FETCH_TEMPLATES_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_TEMPLATES_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case RECEIVE_TEMPLATES:
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

export default templatesReducer;
