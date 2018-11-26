import * as React from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, setCounter }
  from '@app/src/views/payment/state/counter/actions';
import { Counter } from '@app/src/views/payment/components/Counter';

interface IProps {
  counter: number;
  incrementCounter(): void;
  decrementCounter(): void;
  setCounter(value: number): void,
}

interface IState {
  [inputName: string]: number;
}

export class CounterContainer extends React.Component<IProps, IState> {

  private onChange = (event: any) => {
    const { name: inputName, value } = event.target;
    this.setState({ [inputName]: Number(value) });
  }

  private setCounter = () => {
    this.props.setCounter(this.state.valueCounter);
  }

  public render(): JSX.Element {
    const { incrementCounter, decrementCounter, counter} = this.props;

    return(
      <React.Fragment>
        <Counter counter={counter} />
        <button onClick={incrementCounter}>Agregar</button>
        <button onClick={decrementCounter}>Eliminar</button>
        <div>
          <input type="text" name="valueCounter" onChange={this.onChange}/>
          <button onClick={this.setCounter}>Setear</button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ counter }) => ({ counter });

const mapDispatchToProps = (dispatch: any) => ({
  incrementCounter: () => dispatch(incrementCounter()),
  decrementCounter: () => dispatch(decrementCounter()),
  setCounter: (payload: number) => dispatch(setCounter(payload))
});

export const CounterContainerConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
