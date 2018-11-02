import { INCREMENT_COUNTER, DECREMENT_COUNTER, SET_COUNTER } from './actionTypes';
import { IAction } from '@app/src/common/interfaces/action';

const initialState = 0;

export const counter = (state = initialState, action: IAction) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    case SET_COUNTER:
      return action.payload;
    default:
      return state;
  }
};
