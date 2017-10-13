import React from 'react';
import { Panel } from 'react-bootstrap';
import SmartDataTable from 'react-smart-data-table';
import getTestData from './getTestData';

console.log('SmartDataTable:', SmartDataTable);

class DataTableApp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: getTestData(10)
    };
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState({ data: getTestData(100) });   // WHY NOT UPDATING DOM????
    }, 3000);
  }

  render() {
    return (
      <Panel header='Data Table' className="example2">
        <SmartDataTable
          data={this.state.data}
          name='test-table'
          className='ui compact selectable table'
          sortable
          withToggles={true}
        />
      </Panel>
    );
  }
}

export default DataTableApp;
