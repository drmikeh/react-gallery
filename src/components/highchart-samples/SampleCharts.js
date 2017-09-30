import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Panel, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import LineChart from './LineChart';
import AreaChart from './AreaChart';
import PieChart from './PieChart';
import StockPricesChart from './StockPricesChart';

const SampleCharts = ({match}) => {
  return (
    <Panel header='Sample Charts' className='example'>
      <LinkContainer to={`${match.path}/linechart`} activeClassName='btn-primary'><Button>Line Chart</Button></LinkContainer>
      <LinkContainer to={`${match.path}/areachart`} activeClassName='btn-primary'><Button>Area Chart</Button></LinkContainer>
      <LinkContainer to={`${match.path}/piechart`} activeClassName='btn-primary'><Button>Pie Chart</Button></LinkContainer>
      <LinkContainer to={`${match.path}/stocks`} activeClassName='btn-primary'><Button>Stock Chart</Button></LinkContainer>
      <Switch>
        <Route path={`${match.url}/linechart`} component={LineChart} />
        <Route path={`${match.url}/areachart`} component={AreaChart} />
        <Route path={`${match.url}/piechart`} component={PieChart} />
        <Route path={`${match.url}/stocks`} component={StockPricesChart} />
        <Redirect from={`${match.url}`} exact to={`${match.url}/linechart`} />
      </Switch>
    </Panel>
  );
};


export default SampleCharts;
