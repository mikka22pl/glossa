import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";

import lexerReducer from './lexerReducer';
import lexersReducer from './lexersReducer';
import languageReducer from './languageReducer';
import languagesReducer from './languagesReducer';
import coursesReducer from './coursesReducer';
import courseReducer from './courseReducer';
import lessonsReducer from './lessonsReducer';
import lessonReducer from './lessonReducer';
import structuresReducer from './structuresReducer';
import sentenceReducer from './sentenceReducer';
import wordsReducer from './wordsReducer';
import wordReducer from './wordReducer';
import wordTranslationReducer from './wordTranslationReducer';

const reducer = combineReducers({
  language: languageReducer,
  languages: languagesReducer,
  courses: coursesReducer,
  course: courseReducer,
  lessons: lessonsReducer,
  lesson: lessonReducer,
  structures: structuresReducer,
  sentence: sentenceReducer,
  lexer: lexerReducer,
  lexers: lexersReducer,
  words: wordsReducer,
  word: wordReducer,
  wordTranslation: wordTranslationReducer,
  form: formReducer,
  routing: routerReducer
});

export default reducer;
