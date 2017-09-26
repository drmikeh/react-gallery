import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  tick() {
    console.log('tick');
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    console.log('ClockApp componentDidMount');
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log('ClockApp componentWillUnmount');
    clearInterval(this.timerID);
  }

  render() {
    return (
      <Panel header='Clock' className='example'>
        <h2>It is <span style={{color: 'blue'}}>{this.state.date.toLocaleTimeString()}</span>.</h2>
      </Panel>
    );
  }
}

export default Clock;
