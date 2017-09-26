import React from 'react';
import { Panel } from 'react-bootstrap';
import Greeter from './Greeter';

const GreeterApp = (props) => (
  <Panel header='Greetings' className='example'>
    <Greeter name="Pat" />
    <Greeter name="Shane" />
    <Greeter name="Brandon" />
    <Greeter name="Mike" />
    <Greeter />
  </Panel>
);

export default GreeterApp;
