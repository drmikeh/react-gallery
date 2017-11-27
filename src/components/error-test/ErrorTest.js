import React from 'react';
import { Panel, ButtonGroup, Button } from 'react-bootstrap';

import './ErrorTest.css';

class ErrorTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      happyCount: 0,
      errorCount: 0,
      error: null
    };
  }

  componentDidCatch() {
    this.setState({
      errorCount: this.state.errorCount + 1,
      error: `You have now encountered ${this.state.errorCount} errors.`
    });
  }

  beHappy() {
    this.setState({
      happyCount: this.state.happyCount + 1
    });
  }

  throwError() {
    throw new Error('You just threw an error!');
  }

  render() {
    return (
      <Panel header='Counter' className='example'>
        <p>The happyCount is {this.state.happyCount}</p>
        <p>The errorCount is {this.state.errorCount}</p>
        <ButtonGroup>
          <Button
            bsStyle='success'
            onClick={this.beHappy.bind(this)}>Be Happy!
          </Button>
          <Button
            bsStyle='danger'
            onClick={this.throwError.bind(this)}
            disabled={this.state.count === 0} >Throw an Error
          </Button>
        </ButtonGroup>
      </Panel>
    );
  }
}

export default ErrorTest;
