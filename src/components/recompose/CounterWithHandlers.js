import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { compose, withState, withHandlers } from 'recompose';

const addCounting = compose(
  withState('counter', 'setCounter', 0),
  withHandlers({
    increment: ({ setCounter }) => () => setCounter(n => n + 1),
    decrement: ({ setCounter }) => () => setCounter(n => n - 1),
    reset: ({ setCounter }) => () => setCounter(0)
  })
);

const Counter = ({ counter, setCounter, increment, decrement, reset }) => (
  <div>
    <p>The count is {counter}</p>
    <ButtonGroup>
      <Button
        bsStyle='danger'
        onClick={decrement}
        disabled={counter === 0}>Decrement
      </Button>
      <Button
        bsStyle='success'
        onClick={increment}>Increment
      </Button>
      <Button
        bsStyle='primary'
        onClick={reset}>Reset
      </Button>
    </ButtonGroup>
  </div>
);

const CounterWithHandlers = addCounting(Counter);

export default CounterWithHandlers;
