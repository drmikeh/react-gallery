import React from 'react';
import { Panel } from 'react-bootstrap';
import BasicCounter from './BasicCounter';
import CounterWithColor from './CounterWithColor';
import CounterWithHandlers from './CounterWithHandlers';
import GreetingWithToggleVisibility from './GreetingWithToggleVisibility';

const RecomposeExamples = () => (
  <Panel header='Recompose Examples' className='example'>
    <h4>Basic Counter with State</h4>
    <BasicCounter />
    <hr/>

    <h4>Counter with Handlers</h4>
    <CounterWithHandlers />
    <hr/>

    <h4>Counter with Color</h4>
    <CounterWithColor />
    <hr/>

    <h4>Toggle Visibility Example</h4>
    <GreetingWithToggleVisibility title="Greeting" message="What's Up?" />
  </Panel>
);

export default RecomposeExamples;
