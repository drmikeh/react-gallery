import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { withState } from 'recompose';

const enhance = withState('counter', 'setCounter', 0);
const BasicCounter = enhance( ({ counter, setCounter }) => (
  <div>
    <div>
      <p>The count is {counter}</p>
      <ButtonGroup>
        <Button
          bsStyle='danger'
          onClick={() => setCounter(n => n-1)}
          disabled={counter === 0}>Decrement
        </Button>
        <Button
          bsStyle='success'
          onClick={() => setCounter(n => n+1)}>Increment
        </Button>
        <Button
          bsStyle='primary'
          onClick={() => setCounter(0)}>Reset
        </Button>
      </ButtonGroup>
    </div>
  </div>
));

export default BasicCounter;
