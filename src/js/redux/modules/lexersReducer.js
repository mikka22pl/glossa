import {
  FETCH_LEXERS_START, FETCH_LEXERS_ERROR, RECEIVE_LEXERS,
  FETCH_LEXERS_FUNC_START,
  FETCH_LEXERS_FUNC_ERROR,
  RECEIVE_LEXERS_FUNC,
  FETCH_LEXERS_CAT_START,
  FETCH_LEXERS_CAT_ERROR,
  RECEIVE_LEXERS_CAT,
  CLEAR_LEXERS_FUNC,
  CLEAR_LEXERS_CATS
} from '../../actions/lexer';

const lexersReducer = (state = {structures: []}, action) => {
  switch (action.type) {
    case FETCH_LEXERS_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_LEXERS_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case RECEIVE_LEXERS:
      return {
        ...state,
        fetching: false,
        list: action.payload,
        receiveAt: action.receiveAt
      };
    case FETCH_LEXERS_FUNC_START:
      return {
        ...state,
        functions: {
          ...state.functions,
          fetching: true
        }
      };
    case FETCH_LEXERS_FUNC_ERROR:
      return {
        ...state,
        functions: {
          ...state.functions,
          fetching: false,
          error: action.payload
        }
      };
    case RECEIVE_LEXERS_FUNC:
      return {
        ...state,
        functions: {
          ...state.functions,
          fetching: false,
          list: action.payload,
          receiveAt: action.receiveAt
        }
      };
    case FETCH_LEXERS_CAT_START:
      return {
        ...state,
        categories: {
          ...state.categories,
          fetching: true
        }
      };
    case FETCH_LEXERS_CAT_ERROR:
      return {
        ...state,
        categories: {
          ...state.categories,
          fetching: false,
          error: action.payload
        }
      };
    case RECEIVE_LEXERS_CAT:
      return {
        ...state,
        categories: {
          ...state.categories,
          fetching: false,
          list: action.payload,
          receiveAt: action.receiveAt
        }
      };

    case CLEAR_LEXERS_FUNC:
      const funcnewList = state.functions.list.map((item) => {
        item.active = (action.payload && action.payload == item.id) ? !item.active : false;
        return item;
      });
      return {
        ...state,
        functions: {
          ...state.functions,
          list: funcnewList
        }
      };

    case CLEAR_LEXERS_CATS:
      const catnewList = state.categories.list.map((item) => {
        if (!action.payload) {
          item.active = false;
        } else {
          if (action.payload == item.id) {
            item.active = !item.active;
          }
        }
        return item;
      });
      return {
        ...state,
        categories: {
          ...state.categories,
          list: catnewList
        }
      };

    default:
      return state;
  }
};

export default lexersReducer;
