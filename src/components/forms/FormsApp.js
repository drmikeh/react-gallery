import React from 'react';
import { Panel } from 'react-bootstrap';
import PersonForm from './PersonForm'

const FormsApp = () => {
  return (
    <div>
      <Panel header='Person Form' className='example'>
        <PersonForm />
      </Panel>
      <hr />
      <Panel header='Person Form' className='example'>
        <PersonForm firstName='Mike' lastName='Hopper' favoriteColor='green' />
      </Panel>
    </div>
  );
};

export default FormsApp;
