import React from 'react';
import Highcharts from 'highcharts';

const config = {
  credits: {
    enabled: !1
  },
  title: {
    enabled: true,
    text: "Pie Chart",
  },
  plotOptions: {
    pie: {
      allowPointSelect: !0,
      cursor: "pointer",
      dataLabels: {
        enabled: !0,
        color: "#000000",
        connectorColor: "#000000",
        formatter: function() {
          return "<b>" + this.point.name + "</b>: <span style=\"font-weight: normal;\">$" + this.point.y.formatMoney(2) + "</span>";
        }
      }
    }
  },
  series: [{
    type: "pie",
    name: "Cost Breakdown",
    innerSize: "50%",
    data: [
      {
        name: "Principal",
        y: 250000.00,
        color: "#155776"
      },
      {
        name: "Interest",
        y: 176965.43,
        color: "#2085B5"
      },
      {
        name: "Tax",
        y: 112500.00,
        color: "#86C9EA"
      },
      {
        name: "HOA & Insurance",
        y: 32708.33,
        color: "#8ECAE8"
      }
    ]
  }]
};

export default class PieChart extends React.Component {
  componentDidMount() {
    Highcharts.chart('chart', config);
  }
  render(){
    return (
      <div id="chart" style={ {height: '400px'} }></div>
    );
  }
}
