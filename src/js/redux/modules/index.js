import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";

import lexerReducer from './lexerReducer';
import languageReducer from './languageReducer';
import languagesReducer from './languagesReducer';
import coursesReducer from './coursesReducer';
import courseReducer from './courseReducer';
import lessonsReducer from './lessonsReducer';
import lessonReducer from './lessonReducer';

export default combineReducers({
  language: languageReducer,
  languages: languagesReducer,
  courses: coursesReducer,
  course: courseReducer,
  lessons: lessonsReducer,
  lesson: lessonReducer,
  lexers: lexerReducer,
  form: formReducer,
  routing: routerReducer
});
