import React from 'react';
import Timer from './Timer';

const TimerApp = (props) => (
  <div>
    <h1>Timers</h1>
    <Timer name="Eggs" startTime={60 * 3} />
    <Timer name="Grits" startTime={60 * 5}/>
    <Timer name="Bacon" startTime={60 * 7}/>
  </div>
);

export default TimerApp;
