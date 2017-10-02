import React from 'react';
import { Panel, Button, Grid, Row, Col } from 'react-bootstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import MortgageForm from './MortgageForm';
import AmortizationChart from './AmortizationChart';
import BreakdownChart from './BreakdownChart';

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

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
};

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
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
      taxes: 7562.29 + 1368.96,
      insurance: 1552.00
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
      this.state.taxes,
      this.state.insurance
    );
    console.log('amortization:', amortization);
    return (
      <Panel header='Mortgage Calculator' className='mortgage'>
        <Grid>
          <Row>
            <Col md={4}>
              <MortgageForm
                amount = {this.state.amount}
                rate = {this.state.rate}
                term = {this.state.term}
                taxes = {this.state.taxes}
                insurance = {this.state.insurance}
                update = {this.update}
              />
              <hr/>
              <h3>Repayment Summary</h3>
              {/* <p>You entered ${this.state.amount.formatMoney()} for {this.state.term} years at {this.state.rate}%</p> */}
              <h4>Payments</h4>
              <dl className="dl-horizontal">
                <dt>P&I:</dt><dd>${amortization.payments.principalPlusInterest.formatMoney()}</dd>
                <dt>Taxes:</dt><dd>${amortization.payments.taxes.formatMoney()}</dd>
                <dt>Insurance:</dt><dd>${amortization.payments.insurance.formatMoney()}</dd>
                <dt>Total Payment:</dt><dd>${amortization.totals.payment.formatMoney()}</dd>
              </dl>
              <hr/>
              <h4>Totals</h4>
              <dl className="dl-horizontal">
                <dt>Total principal:</dt><dd>${amortization.totals.principal.formatMoney()}</dd>
                <dt>Total interest:</dt><dd>${amortization.totals.interest.formatMoney()}</dd>
                <dt>Total taxes:</dt><dd>${amortization.totals.taxes.formatMoney()}</dd>
                <dt>Total insurance:</dt><dd>${amortization.totals.insurance.formatMoney()}</dd>
                <dt>Total cost of mortgage:</dt><dd>${amortization.totals.cost.formatMoney()}</dd>
              </dl>
            </Col>
            <Col md={8}>
              <LinkContainer
                to={`${this.props.match.path}/amortization`} activeClassName='btn-primary'>
                <Button>Amortization</Button>
              </LinkContainer>
              <LinkContainer
                to={`${this.props.match.path}/breakdown`} activeClassName='btn-primary'>
                <Button>Breakdown</Button>
              </LinkContainer>
              <Switch>
                <PropsRoute path={`${this.props.match.url}/amortization`} component={AmortizationChart} amortization={amortization} />
                <PropsRoute path={`${this.props.match.url}/breakdown`} component={BreakdownChart} amortization={amortization} />
                <Redirect from={`${this.props.match.url}`} exact to={`${this.props.match.url}/amortization`} />
              </Switch>
            </Col>
          </Row>
        </Grid>
      </Panel>
    );
  }
}

export default MortgageCalcApp;
