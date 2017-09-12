import React from 'react';

import './Counter.css';

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement() {
    const newValue = Math.max(0, this.state.count - 1);
    this.setState({
      count: newValue
    });
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>The count is {this.state.count}</p>
        <button onClick={this.decrement.bind(this)}>Decrement</button>
        <button onClick={this.increment.bind(this)}>Increment</button>
      </div>
    );
  }
}

export default CounterApp;
