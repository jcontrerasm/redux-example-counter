import { createStore } from 'redux';
import { paymentState } from '@app/src/views/payment/state';

const CONFIG_REDUX_EXTENSION = (
  (window as any).devToolsExtension &&
  (window as any).devToolsExtension()
);

export const store = createStore(
  paymentState,
  CONFIG_REDUX_EXTENSION
);
