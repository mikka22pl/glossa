import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";

import lexerReducer from './lexerReducer';
import lexersReducer from './lexersReducer';
import lexersTreeReducer from './lexersTreeReducer';
import languageReducer from './languageReducer';
import languagesReducer from './languagesReducer';
import coursesReducer from './coursesReducer';
import courseReducer from './courseReducer';
import lessonsReducer from './lessonsReducer';
import lessonReducer from './lessonReducer';
import templatesReducer from './templatesReducer';
import templateReducer from './templateReducer';
import sentenceReducer from './sentenceReducer';
import sentenceTranslationReducer from './sentenceTranslationReducer';
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
  templates: templatesReducer,
  template: templateReducer,
  sentence: sentenceReducer,
  sentenceTranslation: sentenceTranslationReducer,
  lexer: lexerReducer,
  lexers: lexersReducer,
  lexersTree: lexersTreeReducer,
  words: wordsReducer,
  word: wordReducer,
  wordTranslation: wordTranslationReducer,
  form: formReducer,
  routing: routerReducer
});

export default reducer;
