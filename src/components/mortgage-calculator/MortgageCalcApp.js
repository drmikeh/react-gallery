import React from 'react';
import { Panel } from 'react-bootstrap';
import MortgageForm from './MortgageForm';
import AmortizationChart from './AmortizationChart';

import amortize from './amortize';
import './mortgage.css';

Number.prototype.formatMoney = function(c, d = '.', t = ',') {
  let n = this;
  c = Math.abs(c);
  c = isNaN(c) ? 2 : c;
  let s = n < 0 ? "-" : "";
  let i = parseInt(n = Math.abs(+n || 0).toFixed(c), 10) + "";
  const j = i.length > 3 ? i.length % 3 : 0;
  return s +
    (j ? i.substr(0, j) + t : "") +
    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
    (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

class MortgageCalcApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      startDate: new Date('2016-04-15'),
      amount: 440000,
      rate: 3.79,
      term: 30,
      paymentsPerYear: 12,
      taxesAndFees: 1000
    };
    this.update = this.update.bind(this);
  }

  update(obj) {
    this.setState(obj);
  }

  render() {
    const amortization = amortize(
      this.state.startDate,
      this.state.amount,
      this.state.rate,
      this.state.term,
      this.state.paymentsPerYear,
      this.state.taxesAndFees
    );
    console.log('amortization:', amortization);
    return (
      <Panel header='Mortgage Calculator' className='example mortgage'>
        <MortgageForm
          amount = {this.state.amount}
          rate = {this.state.rate}
          term = {this.state.term}
          update = {this.update}
        />
        <hr/>
        <p>You entered ${this.state.amount.formatMoney()} for {this.state.term} years at {this.state.rate}%</p>
        <h3>Monthly Payment: ${amortization.principalPlusInterestPayment.formatMoney()}</h3>
        <h4>Total cost of mortgage: ${amortization.totalCost.formatMoney()}</h4>
        <hr/>
        <AmortizationChart amortization={amortization} />
      </Panel>
    );
  }
}

export default MortgageCalcApp;
