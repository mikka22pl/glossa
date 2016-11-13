
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
import Courses from "./pages/courses/Courses";
import Course from "./pages/courses/Course";
import Lessons from "./pages/lessons/Lessons";
import Lesson from "./pages/lessons/Lesson";
import WordAdd from "./pages/words/WordAdd";
import Words from "./pages/words/Words";
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
        <Route path="language/:id/wordadd" name="wordadd" component={WordAdd}></Route>
        <Route path="lexer-edit(/:id)" name="lexer-edit" component={LexerEdit}></Route>
        <Route path="courses(/:id)" name="courses" component={Courses}></Route>
        <Route path="course(/:id)" name="course" component={Course}></Route>
        <Route path="lessons(/:id)" name="lessons" component={Lessons}></Route>
        <Route path="lesson(/:languageId)(/:lessonId)" name="lesson" component={Lesson}></Route>
        <Route path="words(/:languageId)" name="words" component={Words}></Route>
      </Route>
    </Router>
  </Provider>,
app);
