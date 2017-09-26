import React from 'react';
import Timer from './Timer';
import { Panel, Button } from 'react-bootstrap';

class TimerApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      timers: [
        { id: 1, name: 'Eggs',  startTime: 60 * 3 },
        { id: 2, name: 'Grits', startTime: 60 * 5 },
        { id: 3, name: 'Bacon', startTime: 60 * 7 },
      ],
      nextId: 4
    };
  }

  onAdd() {
    const timers = [...this.state.timers, { id: this.state.nextId, name: 'Name', startTime: 60 * 5 }];
    this.setState({
      timers,
      nextId: this.state.nextId + 1
    });
  }

  onRemove(id) {
    console.log('onRemove:', id);
    const timers = this.state.timers.filter(timer => timer.id !== id);
    this.setState({ timers });
  }

  render() {
    const header = (
      <div>
        <span>Cooking Timers</span>
        <Button
          bsStyle="success"
          bsSize="xsmall"
          className="small"
          style={{color: 'white', marginLeft: '10px'}}
          onClick={this.onAdd.bind(this)}>+</Button>
      </div>
    );
    const timers = this.state.timers.map( (timer, index) => {
      return (
        <Timer key={timer.id} {...timer} onRemove={this.onRemove.bind(this)} />
      );
    })
    return (
      <Panel header={header} className='example'>
        {timers}
      </Panel>
    );
  }
}

export default TimerApp;
