import { FETCH_WORDS_START, FETCH_WORDS_ERROR, RECEIVE_WORDS,
ASSIGN_FUNCTION,ASSIGN_FUNCTION_ERROR,REMOVE_WORD_CATEGORY } from '../../actions/word';
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
        list: action.payload,
        receiveAt: action.receiveAt
      };

    case ASSIGN_FUNCTION:
      const indx = _.findIndex(state.list, ['id', action.payload.id]);
      let word = {...state.list[indx]};
      word.categories = word.categories.concat(action.payload.categories);
      return {
        ...state,
        list: [
          ...state.list.slice(0, indx),
          word,
          ...state.list.slice(indx + 1)
        ]
      };
      /*let new_word = Object.assign(state.list[indx], action.payload.word);
      //new_word.functions = action.payload.func;
      new_word.categories = action.payload.cats;
      let newState = Object.assign({}, state);
      newState.list[indx] = new_word;





      // console.log('newState', new_word);
      return newState;*/

    case ASSIGN_FUNCTION_ERROR:
      console.log('assign error', action.payload);
      return {
        ...state,
        error: action.payload
      };

    case REMOVE_WORD_CATEGORY:
      const rindx = _.findIndex(state.list, ['id', action.payload.wordId]);
      const lindx = _.findIndex(state.list[rindx].categories, ['id', action.payload.lexerId]);
      const n2Categories = [
        ...state.list[rindx].categories.slice(0, lindx),
        ...state.list[rindx].categories.slice(lindx + 1)
      ];
      let word2 = {...state.list[rindx], categories: n2Categories};
      return {
        ...state,
        list: [
          ...state.list.slice(0, rindx),
          word2,
          ...state.list.slice(rindx + 1)
        ]
      };

    default:
      return state;
  }
}

export default wordsReducer;
