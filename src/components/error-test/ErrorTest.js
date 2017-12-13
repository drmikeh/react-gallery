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

  componentDidCatch(error, info) {
    console.log('ERROR:', error);
    console.log('ERROR info:', info);
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
    if (this.state.error) {
      return (
        <div>
          <p>Sorry, something went wrong.</p>
          <p>{this.state.error}</p>
        </div>
      );
    }
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
