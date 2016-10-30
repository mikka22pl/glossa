import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import middleware from './middleware';
import reducer from './modules';

let lexers = [];
for (let i=1; i<=3; i++) {
  lexers.push({
    id: i,
    name: 'Lexer-' + i,
    descr: 'description_' + i
  });
}

const initialState = {
  language: null,
  lexers: {
    list: lexers
  }
}

/*const logger = (store) => (next) => (action) => {
  console.log("action.fired", action);
}*/
const middleware = applyMiddleware(routerMiddleware(browserHistory));

export default createStore(reducer, initialState, middleware);

/*store.subscribe(() => {
  console.log("store changed", store.getState());
})*/
