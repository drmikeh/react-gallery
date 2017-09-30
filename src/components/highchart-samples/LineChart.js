import React from 'react';
// import ReactHighstock from 'react-highcharts/ReactHighstock.src';
import Highcharts from 'highcharts';
import { Panel } from 'react-bootstrap';

const config = {
  chart: {
    marginRight: 80 // like left
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: [
    {
      lineWidth: 1,
      title: {
        text: 'Primary Axis'
      }
    },
    {
      lineWidth: 1,
      opposite: true,
      title: {
        text: 'Secondary Axis'
      }
    }
  ],
  series: [
    {
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    },
    {
      data: [144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2],
      yAxis: 1
    }
  ]
};

export default class LineChart extends React.Component {
  componentDidMount() {
    Highcharts.chart('chart', config);
  }
  render(){
    return (
      <Panel header='Line Chart' className='example'>
        {/* <ReactHighstock config={config}/> */}
        <div id="chart" style={ {height: '400px'} }></div>
      </Panel>
    );
  }
}
