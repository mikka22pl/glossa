export default function clientMiddleware(client) {
  return({dispatch, getState}) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      const { promise, types, ...rest } = action;
      
    }
  }
}
