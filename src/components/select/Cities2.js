import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


class Cities2 extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="class-name">
        <h3>Cities 2</h3>
        <FormGroup controlId="formControlsSelect">
        <ControlLabel>Select</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="select">select</option>
          <option value="apple">Apple</option>
          <option value="orange">Orange</option>
          <option value="banana">Banana</option>
        </FormControl>
      </FormGroup>
      </div>
    );
  }
}

export default Cities2;
