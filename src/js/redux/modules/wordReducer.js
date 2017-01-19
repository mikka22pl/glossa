import { FETCH_WORD_START, RECEIVE_WORD, FETCH_WORD_ERROR  } from '../../actions/word';
import { INCLUDE_CATEGORY_START, INCLUDE_CATEGORY_FULFILLED, INCLUDE_CATEGORY_ERROR } from '../../actions/word/includeCategory';
import { EXCLUDE_CATEGORY_START, EXCLUDE_CATEGORY_FULFILLED, EXCLUDE_CATEGORY_ERROR } from '../../actions/word/excludeCategory';

const wordReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_WORD_START:
      return {
        ...state,
        fetching: true
      };

    case RECEIVE_WORD:
      return {
        ...state,
        ...action.payload,
        fetching: false
      };

    case FETCH_WORD_ERROR:
      return {
        ...state,
        errorMsg: action.payload.error,
        fetching: false
      };

    case INCLUDE_CATEGORY_START:
      return {
        ...state,
        ic_pending: true
      };

    case INCLUDE_CATEGORY_FULFILLED:
      return {
        ...state,
        categoriesInclude: state.categoriesInclude.concat(action.payload.error),
        ic_pending: false
      };

    case INCLUDE_CATEGORY_ERROR:
      return
        return {
          ...state,
          errorMsg: action.payload,
          ic_pending: false
        };

    case EXCLUDE_CATEGORY_START:
      return {
        ...state,
        ic_pending: true
      };

    case EXCLUDE_CATEGORY_FULFILLED:
      const indx = _.findIndex(state.categoriesInclude, ['id', action.payload]);
      console.log('categories exclude ', indx);
      return {
        ...state,
        categoriesInclude: [
          ...state.categoriesInclude.slice(0, indx),
          ...state.categoriesInclude.slice(indx + 1)
        ],
        ic_pending: false
      };

    case EXCLUDE_CATEGORY_ERROR:
      return {
        ...state,
        errorMsg: action.payload.error,
        ic_pending: false
      };

    default:
      return state;
  }
}

export default wordReducer;
