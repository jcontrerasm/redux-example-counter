import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '@app/src/common/store';
import { Payment } from '@app/src/views/payment';
import './index.css';

render(
  <Provider store={store}>
    <Payment />
  </Provider>,
  document.getElementById('app')
)
