import { combineReducers } from 'redux';
import { counter } from './counter/reducer';

export const paymentState = combineReducers ({
  counter,
});
