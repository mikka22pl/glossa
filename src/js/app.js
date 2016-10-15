
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Languages from "./pages/languages/languages";
import Layout from "./pages/layout";
import Lexers from "./pages/lexers/lexers";
import Mainpage from "./pages/mainpage";

const app = document.getElementById('app');
/*<Layout />*/
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Mainpage}></IndexRoute>
      <Route path="lexers" component={Lexers}></Route>
      <Route path="languages" component={Languages}></Route>
    </Route>
  </Router>,
app);
