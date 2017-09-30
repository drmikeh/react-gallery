import React from 'react';
import Highcharts from 'highcharts';

const config = {
  chart: {
    marginRight: 80 // like left
  },
  title: {
    enabled: true,
    text: "Line Chart",
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
        <div id="chart" style={ {height: '400px'} }></div>
    );
  }
}
