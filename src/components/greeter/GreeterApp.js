import React from 'react';
import Greeter from './Greeter';

const GreeterApp = (props) => (
  <div>
    <h1>Greetings</h1>
    <Greeter name="Pat" />
    <Greeter name="Shane" />
    <Greeter name="Brandon" />
    <Greeter name="Mike" />
    <Greeter />
  </div>
);

export default GreeterApp;
