import { CHOOSE_LANGUAGE } from '../constants';

export function chooseLanguage(id) {
  return {
    type: 'CHOOSE_LANGUAGE',
    payload: id
  };
};
