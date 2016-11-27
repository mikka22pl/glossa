import { FETCH_WORDS_START, FETCH_WORDS_ERROR, RECEIVE_WORDS,
ASSIGN_FUNCTION } from '../../actions/word';
import _ from 'lodash';

const wordsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_WORDS_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_WORDS_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case RECEIVE_WORDS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        list: action.payload,
        //list2: _.mapKeys(action.payload, 'id'),
        receiveAt: action.receiveAt
      };

    case ASSIGN_FUNCTION:
      console.log('r', action.payload);

      const indx = _.findIndex(state.list, ['id', action.payload.word.id]);
      let new_word = Object.assign(state.list[indx], action.payload.word);
      new_word.functions = action.payload.func;
      new_word.categories = action.payload.cats;
      let newState = Object.assign({}, state);
      newState.list[indx] = new_word;

      console.log('newState', new_word);
      return newState;

    default:
      return state;
  }
}

export default wordsReducer;
