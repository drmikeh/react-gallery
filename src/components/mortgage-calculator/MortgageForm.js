import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, InputGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';

const MortgageForm = ({amount, rate, term, update}) => {
  return (
    <Form horizontal>
      <FormGroup controlId="amount">
        <Col componentClass={ControlLabel} sm={2}>
          Mortgage Amount
        </Col>
        <Col sm={10}>
          <InputGroup>
            <FormControl
              type="number"
              placeholder="100000"
              value={amount}
              step="10000"
              onChange={(e) => update({ amount: Number(e.target.value) })} />
            <InputGroup.Addon>.00</InputGroup.Addon>
          </InputGroup>
        </Col>
      </FormGroup>
      <FormGroup controlId="amount">
        <Col componentClass={ControlLabel} sm={2}>
          Interest Rate (%)
        </Col>
        <Col sm={10}>
          <InputGroup>
            <FormControl
              type="number"
              placeholder="3.9"
              step="0.1"
              value={rate}
              onChange={(e) => update({ rate: Number(e.target.value) })}/>
            <InputGroup.Addon>%</InputGroup.Addon>
          </InputGroup>
        </Col>
      </FormGroup>
      <FormGroup controlId="term">
        <Col componentClass={ControlLabel} sm={2}>
          Mortgage term
        </Col>
        <Col sm={10}>
          <InputGroup>
            <FormControl
              componentClass="select"
              placeholder="select"
              value={term}
              onChange={(e) => update({ term: Number(e.target.value) })} >
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
            </FormControl>
            <InputGroup.Addon>years</InputGroup.Addon>
          </InputGroup>
        </Col>
      </FormGroup>
    </Form>
  );
};

MortgageForm.propTypes = {
  amount: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  term: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired
};

export default MortgageForm;
