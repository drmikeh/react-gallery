import React from 'react';
import Cities from './Cities';
import MultiSelect from './MultiSelect';

import { Panel } from 'react-bootstrap';
import 'react-select/dist/react-select.css';
import './select.css';

class SelectApp extends React.Component {
  render() {
    return (
      <Panel header='React Select App' className="example select-app">
        <Cities />
        <MultiSelect />
      </Panel>
    );
  }
}

export default SelectApp;
