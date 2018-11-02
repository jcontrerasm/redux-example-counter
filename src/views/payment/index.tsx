import * as React from 'react';
import { CounterContainerConnected } from '@app/src/views/payment/containers/CounterContainer';

export class Payment extends React.Component<{}, {}> {
  render() {
    return(
      <React.Fragment>
        <CounterContainerConnected />
      </React.Fragment>
    );
  }
}
