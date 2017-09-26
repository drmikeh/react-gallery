import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Interval from './interval';
import Editable from 'react-x-editable';
import TimerDoneSound from './TimerDoneSound';
import { ButtonGroup, Button, Panel } from 'react-bootstrap';

import './Timer.css';

function getMinutesAndSeconds(totalSeconds) {
  let minutes = Math.floor(totalSeconds / 60);
  let sec = totalSeconds % 60;
  sec = sec < 10 ? `0${sec}` : `${sec}`;
  return `${minutes}:${sec}`;
}

/*
  startTime     is in seconds
  timeRemaining is in tenths of seconds
*/

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRunning: false,
      isPaused: false,
      isDone: false,
      timeRemaining: props.startTime * 10
    };
    this.tick = this.tick.bind(this);
    this.interval = new Interval(this.tick, 100);
  }

  reset() {
    this.setState({
      isRunning: false,
      isPaused: false,
      isDone: false,
      timeRemaining: this.props.startTime * 10
    });
    this.interval.restart();
  }

  add30() {
    this.setState({ timeRemaining: this.state.timeRemaining + 300 });
  }

  sub30() {
    this.setState({ timeRemaining: this.state.timeRemaining - 300 });
  }

  componentDidMount() {
    this.interval.start();
  }

  componentWillUnmount() {
    this.interval.stop();
  }

  tick() {
    if (this.state.timeRemaining <= 0) {
      this.setState({
        timeRemaining: 0,
        isDone: true
      });
      clearInterval(this.intervalTimer);
    }
    else if (this.state.isRunning) {
      const newValue = this.state.timeRemaining - 1;
      this.setState({ timeRemaining: newValue });
    }
  }

  toggle() {
    this.setState({
      isRunning: !this.state.isRunning,
      isPaused: !!this.state.isRunning
    });
  }

  render () {
    const timeRemaining = this.state.timeRemaining / 10;
    const seconds = Math.floor(timeRemaining);
    const finalSecondsClassName = timeRemaining > 0 ? 'remaining final-seconds' : 'remaining';
    const remaining = seconds > 9 ?
      <span className={'remaining'}>{getMinutesAndSeconds(seconds)}</span> :
      <span className={finalSecondsClassName}>{timeRemaining.toFixed(1)}</span>;
    const toggleLabel = this.state.isRunning ? 'Pause' : 'Start';
    const toggleButtonStyle = this.state.isRunning ? 'warning' : 'success';
    const timerDoneSound = this.state.isDone ? <TimerDoneSound /> : null;
    const bsStyle = this.state.isDone ? 'danger' :
                    this.state.isRunning ? 'success' :
                    this.state.isPaused ? 'warning' : 'info';

    const header = (
      <h3>
        <Editable
          name="name"
          dataType="text"
          mode="popup"
          title="Please enter name"
          value={this.props.name}
        />
        <Button
          bsStyle="danger"
          bsSize="xsmall"
          className="pull-right"
          style={{color: 'white', marginTop: '-20px'}}
          onClick={() => this.props.onRemove(this.props.id)}>X</Button>
      </h3>
    );
    return (
      <Panel header={header} bsStyle={bsStyle}>
        {remaining}
        <ButtonGroup>
          <Button
            disabled={this.state.isDone}
            bsStyle={toggleButtonStyle}
            onClick={this.toggle.bind(this)}>{toggleLabel}
          </Button>
          <Button
            bsStyle='danger'
            onClick={this.reset.bind(this)}>Reset
          </Button>
          <Button
            bsStyle='primary'
            disabled={this.state.isDone}
            onClick={this.add30.bind(this)}>+30
          </Button>
          <Button
            bsStyle='primary'
            disabled={this.state.isDone}
            onClick={this.sub30.bind(this)}>-30
          </Button>
        </ButtonGroup>
        {timerDoneSound}
      </Panel>
    );
  }
}

Timer.propTypes = {
  name: PropTypes.string.isRequired,
  startTime: PropTypes.number.isRequired
}

export default Timer;
