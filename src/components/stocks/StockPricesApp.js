import React from 'react';
import axios from 'axios';
import { Panel } from 'react-bootstrap';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';

const defaultChartConfig = {
  rangeSelector: {
    selected: 1
  },
  title: { text: 'AAPL Stock Price' },
  series: [{
    name: 'AAPL',
    data: [],
    tooltip: {
      valueDecimals: 2
    }
  }]
};

class StockPricesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartConfig: defaultChartConfig
    };
  }
  async componentDidMount() {
    try {
      const prices = (await axios.get('/apple-stock-prices.json')).data;
      console.log('prices:', prices);
      const chartConfig = Object.assign({}, this.state.chartConfig, {
        series: [{
          name: 'AAPL',
          data: prices,
          tooltip: {
            valueDecimals: 2
          }
        }]
      })
      this.setState({ chartConfig });
    }
    catch (err) {
      alert(`ERROR: ${err}`);
    }
  }

  render() {
    return (
      <Panel header='Quotes' className="example">
        <ReactHighstock isPureConfig config={this.state.chartConfig}/>
      </Panel>
    );
  }
}

export default StockPricesApp;
