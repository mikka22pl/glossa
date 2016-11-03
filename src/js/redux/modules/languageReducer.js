
import { CHOOSE_LANGUAGE } from '../../constants';

const languageReducer = (state = {}, action) => {
  console.log('language reducer', action.type);
  switch (action.type) {
    case CHOOSE_LANGUAGE:
      console.log('chosen language ' + action.payload);
      return {
        id: action.payload
      }
    default:
      return state;
  }
};

export default languageReducer;
