
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";

import Languages from "./pages/languages/languages";
import Layout from "./pages/layout";
import Lexers from "./pages/lexers/lexers";
import LexerEdit from "./pages/lexers/LexerEdit";
import Mainpage from "./pages/mainpage";
import store from './redux';

/*const routes = (

);*/

const history = syncHistoryWithStore(browserHistory, store);
const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Mainpage}></IndexRoute>
        <Route path="lexers" name="lexers" component={Lexers}></Route>
        <Route path="languages" name="languages" component={Languages}></Route>
        <Route path="lexer-edit" name="lexer-edit" component={LexerEdit}></Route>
      </Route>
    </Router>
  </Provider>,
app);
