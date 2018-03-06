import React from 'react';
import { Panel, ButtonGroup, Button } from 'react-bootstrap';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

const appState = observable({
  count: 0
});

appState.increment = function () {
  this.count++;
  console.log(this.count);
};

appState.decrement = function () {
  this.count = Math.max(0, this.count - 1);
  console.log(this.count);
};

const CounterApp = observer(class extends React.Component {
  increment() {
    this.props.store.increment();
  }

  decrement() {
    this.props.store.decrement();
  }

  render() {
    return (
      <Panel header='MobX Counter' className='example'>
        <p>The count is {this.props.store.count}</p>
        <ButtonGroup>
          <Button
            bsStyle='danger'
            onClick={this.decrement.bind(this)}
            disabled={this.props.store.count === 0} >Decrement
          </Button>
          <Button
            bsStyle='success'
            onClick={this.increment.bind(this)}>Increment
          </Button>
        </ButtonGroup>
      </Panel>
    );
  }
});

const MobXCounterApp = () => <CounterApp store={appState} />;

export default MobXCounterApp;
