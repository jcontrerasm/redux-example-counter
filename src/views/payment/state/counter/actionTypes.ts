import { IAction } from '@app/src/common/interfaces/action';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const SET_COUNTER = 'SET_COUNTER';

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
