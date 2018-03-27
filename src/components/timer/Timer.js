import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Interval from './interval';
import TimerDoneSound from './TimerDoneSound';
import { ButtonGroup, Button, Panel } from 'react-bootstrap';
import { RIEInput } from 'riek';

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
      name: props.name,
      isRunning: false,
      isPaused: false,
      isDone: false,
      timeRemaining: props.startTime * 10
    };
    this.interval = new Interval(this.tick, 100);
  }

  reset = () => {
    this.setState({
      isRunning: false,
      isPaused: false,
      isDone: false,
      timeRemaining: this.props.startTime * 10
    });
    this.interval.stop();
  }

  add30 = () => {
    this.setState({ timeRemaining: this.state.timeRemaining + 300 });
  }

  sub30 = () => {
    this.setState({ timeRemaining: this.state.timeRemaining - 300 });
  }

  componentWillUnmount() {
    this.interval.stop();
  }

  tick = () => {
    console.log('tick');
    if (this.state.timeRemaining <= 0) {
      this.interval.stop();
      this.setState({
        timeRemaining: 0,
        isDone: true
      });
    }
    else {
      const newValue = this.state.timeRemaining - 1;
      this.setState({ timeRemaining: newValue });
    }
  }

  toggle = () => {
    this.interval.isRunning() ? this.interval.stop() : this.interval.start();
    this.setState({
      isRunning: this.interval.isRunning(),
      isPaused: !this.interval.isRunning()
    });
  }

  updateName = ({name}) => {
    this.setState({ name });
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
        <RIEInput
          value={this.state.name}
          change={this.updateName}
          propName="name"
          className={"editable"}
          classLoading="loading"
          classInvalid="invalid"
        />
        <Button
          bsStyle="danger"
          bsSize="xsmall"
          className="pull-right"
          style={{color: 'white'}}
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
            onClick={this.toggle}>{toggleLabel}
          </Button>
          <Button
            bsStyle='danger'
            onClick={this.reset}>Reset
          </Button>
          <Button
            bsStyle='primary'
            disabled={this.state.isDone}
            onClick={this.add30}>+30
          </Button>
          <Button
            bsStyle='primary'
            disabled={this.state.isDone}
            onClick={this.sub30}>-30
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
