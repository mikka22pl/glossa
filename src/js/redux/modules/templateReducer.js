import {
  FETCH_TEMPLATE_START,
  FETCH_TEMPLATE_ERROR,
  RECEIVE_TEMPLATE } from '../../actions/template/fetchTemplate';
import {
  FETCH_SLOTSPECS_START,
  FETCH_SLOTSPECS_ERROR,
  RECEIVE_SLOTSPECS } from '../../actions/slot/fetchSpecs';

const templateReducer = (state = {template: {details: {slotspecs: {list:[]}}}}, action) => {
  switch (action.type) {
    case FETCH_TEMPLATE_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_TEMPLATE_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case RECEIVE_TEMPLATE:
      return {
        ...state,
        fetching: false,
        fetched: true,
        details: action.payload,
        receiveAt: action.receiveAt
      };

      // **************** slot specifies
    case FETCH_SLOTSPECS_START:
      return {
        ...state,
        details: {
          ...state.details,
          slotspecs: {
            fetching: true
          }
        }
      };

    case FETCH_SLOTSPECS_ERROR:
      return {
        ...state,
        details: {
          ...state.details,
          slotspecs: {
            fetching: false,
            error: action.payload
          }
        }
      };

    case RECEIVE_SLOTSPECS:
      console.log('receive slotspecs ' + action.ordering, action.payload[0]);
      /*let array;
      if (action.payload.length > 0) {
        array[action.ordering] = action.payload;
      }*/
      //let newArray = [...state.details.slotspecs.list];
      if (action.payload[0] === undefined) {
        return state;
      }
      let newArray = [].concat(state.details.slotspecs.list);
      newArray[action.ordering] = action.payload;
      console.log ('arra', newArray);
      return {
        ...state,
        details: {
          ...state.details,
          slotspecs: {
            fetching: false,
            list: newArray
          }
        }
      };

    default:
      return state;
  }
};

export default templateReducer;
