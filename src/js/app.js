
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";

import Languages from "./pages/languages/languages";
import Layout from "./pages/layout";
import LexersPage from "./pages/lexers/LexersPage";
import LexerEditPage from "./pages/lexers/LexerEditPage";
import Courses from "./pages/courses/Courses";
import Course from "./pages/courses/Course";
import Lessons from "./pages/lessons/Lessons";
import Lesson from "./pages/lessons/Lesson";
import Template from "./pages/template/Template";
import TemplateFormPage from './pages/template/TemplateFormPage';
import WordAdd from "./pages/words/WordAdd";
import Words from "./pages/words/Words";
import wordDetails from "./pages/words/wordDetails";
import Mainpage from "./pages/mainpage";
import store from './redux';

/*const routes = (

);*/

const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./redux', () => {
    const nextRootReducer = require('./redux/index').default;
    store .replaceReducer(nextRootReducer);
  });
}
const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Mainpage}></IndexRoute>
        <Route path="lexers(/:id)" name="lexers" component={LexersPage}></Route>
        <Route path="languages" name="languages" component={Languages}></Route>
        <Route path="language/:id/wordadd" name="wordadd" component={WordAdd}></Route>
        <Route path="lexer-edit(/:id)" name="lexer-edit" component={LexerEditPage}></Route>
        <Route path="courses(/:id)" name="courses" component={Courses}></Route>
        <Route path="course(/:id)" name="course" component={Course}></Route>
        <Route path="lessons(/:id)" name="lessons" component={Lessons}></Route>
        <Route path="lesson(/:languageId)(/:lessonId)" name="lesson" component={Lesson}></Route>
        <Route path="template(/:lessonId)" name="template" component={Template}></Route>
        <Route path="template/form(/:templateId)" name="templateForm" component={TemplateFormPage}></Route>
        <Route path="words(/:languageId)" name="words" component={Words}></Route>
        <Route path="/word/:wordId" name="wordDetails" component={wordDetails}></Route>
      </Route>
    </Router>
  </Provider>,
app);
