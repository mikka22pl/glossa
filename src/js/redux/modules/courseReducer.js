
import { CHOOSE_COURSE } from '../../constants';

const courseReducer = (state = {}, action) => {
  console.log('course reducer', action.type);
  switch (action.type) {
    case CHOOSE_COURSE:
      console.log('chosen course ' + action.payload);
      return {
        id: action.payload
      }
    default:
      return state;
  }
};

export default courseReducer;
