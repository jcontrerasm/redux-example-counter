import { IAction } from '@app/src/common/interfaces/action';
import { INCREMENT_COUNTER, DECREMENT_COUNTER, SET_COUNTER} from './actionTypes';

// ActionCreator
export const incrementCounter = (): IAction => ({
  type: INCREMENT_COUNTER
});

export const decrementCounter = (): IAction => ({
  type: DECREMENT_COUNTER
});

export const setCounter = (counter: number): IAction => ({
  type: SET_COUNTER,
  payload: counter
});
