import React from 'react';
import { ButtonGroup, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { compose, withState } from 'recompose';

const enhance = compose(
  withState('counter', 'setCounter', 0),
  withState('color', 'setColor', 'red')
);

const flexBoxContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around"
};

const Counter = enhance( ({ counter, setCounter, color, setColor }) => (
  <div style={flexBoxContainer}>
    <div style={{marginTop: "10px"}}>
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
    <div>
      <p>The color is {color}</p>
      <ButtonToolbar>
        <ToggleButtonGroup type="radio" name="color" defaultValue={"red"} onChange={ setColor }>
          <ToggleButton bsStyle='danger'  value={"red"}>Red</ToggleButton>
          <ToggleButton bsStyle='success' value={"green"}>Green</ToggleButton>
          <ToggleButton bsStyle='primary' value={"blue"}>Blue</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    </div>
  </div>
));

export default Counter;
