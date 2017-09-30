import React from 'react';
// import ReactHighstock from 'react-highcharts/ReactHighstock.src';
// import Highcharts from 'highcharts/highstock';
import Highcharts from 'highcharts';

const getYear = (millis) => {
  let d = new Date(millis);
  d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);
  return d.getFullYear();
}

const getConfig = (amortization) => {
  // const principal = amortization.schedule.map( s => [s.date, s.principal] );
  // const interest = amortization.schedule.map( s => [s.date, s.interest] );
  // const balance = amortization.schedule.map( s => [s.date, s.balance] );
  // const taxesAndFees = amortization.schedule.map( s => [s.date, s.taxesAndFees] );
  // const categories   = amortization.schedule.map( s => '' + new Date(s.date).getFullYear() );
  const categories   = amortization.schedule.map( s => '' + s.year );
  const principal    = amortization.schedule.map( s => s.principal );
  const interest     = amortization.schedule.map( s => s.interest );
  const balance      = amortization.schedule.map( s => s.balance );
  const taxesAndFees = amortization.schedule.map( s => s.taxesAndFees );

  const annualPaymentAmount = principal[1] + interest[1] + taxesAndFees[1];
  const annualPaymentAmountRounded = Math.ceil(annualPaymentAmount / 10000) * 10000;

  console.log('categories:', categories);
  console.log('principal:', principal);
  console.log('interest:', interest);
  console.log('balance:', balance);
  console.log('taxesAndFees:', taxesAndFees);

  return {
    credits: {
      enabled: false
    },
    chart: {
      zoomType: "xy",
    },
    title: {
      enabled: false,
      text: "Amortization",
      // margin: 30
    },
    legend: {
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      // margin: 10
      itemMarginTop: 20,
    },
    xAxis: {
      type: 'category',
      categories: categories,
      minTickInterval: 5
    },
    yAxis: [
      {
        min: 0,
        max: amortization.loanAmount,
    	  tickInterval: amortization.loanAmount / 5,
        minPadding: 0.5,
    		maxPadding: 0,
        title: {
          text: "Balance",
        }
      },
      {
        min: 0,
        max: annualPaymentAmountRounded,
    		tickInterval: annualPaymentAmountRounded / 5,
    		minPadding: 0.5,
    		maxPadding: 0,
        title: {
          text: "Payments",
        },
        opposite: true
      }
    ],
    tooltip: {
      shared: !0,
      formatter(e) {
        const fn = pt => (
          `<span style="color:${pt.color}">${pt.series.name || pt.name}</span>: ` +
          `<b>$${pt.y.formatMoney(2)}</b><br>`
        );
        return (
          `<b>${this.name || getYear(this.x)}</b><br/>` +
          this.points.map(fn).join('')
        );
      }
    },
    plotOptions: {
      column: { stacking: "normal" }
    },
    series: [
      {
        pointPadding: .02,
        groupPadding: .02,
        yAxis: 1,
        name: "Taxes & Fees",
        data: taxesAndFees,
        type: "column",
        color: "#8ECAE8"
      },
      {
        pointPadding: .02,
        groupPadding: .02,
        yAxis: 1,
        name: "Interest",
        data: interest,
        type: "column",
        color: "#2085B5"
      },
      {
        pointPadding: .02,
        groupPadding: .02,
        yAxis: 1,
        name: "Principal",
        data: principal,
        type: "column",
        color: "#155776"
      },
      {
        name: "Balance",
        yAxis: 0,
        data: balance,
        type: "spline",
        color: "#0D3548"
      }
    ]
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
      // <ReactHighstock config={getConfig(amortization)}/>
    );
  }
}
