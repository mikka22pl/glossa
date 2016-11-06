import { CHOOSE_COURSE } from '../constants';

export function chooseCourse(id) {
  return {
    type: CHOOSE_COURSE,
    payload: id
  };
};
