import React from 'react';
import Highcharts from 'highcharts';

const getConfig = (amortization) => {
  return {
    credits: {
      enabled: !1
    },
    title: {
      enabled: true,
      text: "Breakdown",
    },
    plotOptions: {
      pie: {
        allowPointSelect: !0,
        cursor: "pointer",
        dataLabels: {
          enabled: !0,
          color: "#000000",
          connectorColor: "#000000",
          formatter() {
            const total = this.series.data.reduce((a, b) => a + b.y, 0);
            const percentage=((this.y / total) * 100).toFixed(1);
            return `<b>${this.point.name}</b>: <span style="font-weight: normal;">$${this.point.y.formatMoney(2)} (${percentage}%)</span>`;
          }
        }
      }
    },
    tooltip: {
      shared: !0,
      formatter(e) {
        return `<b>${this.point.name}: $${this.point.y.formatMoney(2)}</b><br/>`;
      }
    },
    series: [{
      type: "pie",
      name: "Cost Breakdown",
      innerSize: "50%",
      data: [
        { name: "Principal", color: "#155776", y: amortization.totals.principal },
        { name: "Interest",  color: "#2085B5", y: amortization.totals.interest  },
        { name: "Taxes",     color: "#86C9EA", y: amortization.totals.taxes     },
        { name: "Insurance", color: "#A0E0FF", y: amortization.totals.insurance }
      ]
    }]
  }
};

export default class AmortizationChart extends React.Component {
  constructor(props) {
    super(props);
    this.chart = null;
  }
  componentDidMount() {
    this.chart = Highcharts.chart('chart', getConfig(this.props.amortization));
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
    if (this.chart) {
      this.chart.update(getConfig(this.props.amortization));
    }
  }
  render() {
    return (
      <div id="chart" style={ {height: '400px'} }></div>
    );
  }
}
