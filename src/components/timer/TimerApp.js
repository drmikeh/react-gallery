import React from 'react';
import Timer from './Timer';

const GreeterApp = (props) => (
  <div>
    <h1>Timers</h1>
    <Timer name="eggs" startTime={15} />
    <Timer name="grits" startTime={30}/>
    <Timer name="bacon" startTime={60 * 7}/>
  </div>
);

export default GreeterApp;
