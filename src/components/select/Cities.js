import React from 'react';
import Select from 'react-select';
// import fetch from 'isomorphic-fetch';
import axios from 'axios';

import { Form, Checkbox, Radio } from 'react-bootstrap';

class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creatable: false,
			backspaceRemoves: true,
			multi: true,
      value: null
		};

    this.apiUrl = 'https://59d3b7c25803340011fd5ed1.mockapi.io/api/cities'

    this.onChange = this.onChange.bind(this);
    this.switchToMulti = this.switchToMulti.bind(this);
    this.switchToSingle = this.switchToSingle.bind(this);
    this.getCities = this.getCities.bind(this);
    this.gotoCity = this.gotoCity.bind(this);
    this.toggleBackspaceRemoves = this.toggleBackspaceRemoves.bind(this);
    this.toggleCreatable = this.toggleCreatable.bind(this);
  }

  onChange(value) {
		this.setState({ value: value });
	}

	switchToMulti() {
		this.setState({
			multi: true,
			value: [this.state.value],
		});
	}

  switchToSingle() {
		this.setState({
			multi: false,
			value: this.state.value ? this.state.value[0] : null
		});
	}

  getCityNames(cities) {
    return cities.map(city => city.city).join();
  }

	getCities(input) {
    console.log('getCities:', input);
		if (!input) {
      console.log('WARNING: NO INPUT');
			return Promise.resolve({ options: [] });
		}

    return axios.get(this.apiUrl)
    .then((res) => {
      console.log('res.data:', this.getCityNames(res.data));
      // mockapi does not support queries so we mimic it here:
      const matching = res.data.filter( c => c.city.toLowerCase().includes(input.toLowerCase()) );
      console.log('matching:', this.getCityNames(matching));
  		return { options: matching };
    });
	}

  gotoCity(value, event) {
		window.open(value.html_url);
	}

	toggleBackspaceRemoves() {
		this.setState({ backspaceRemoves: !this.state.backspaceRemoves });
	}

	toggleCreatable() {
		this.setState({ creatable: !this.state.creatable });
	}

  render() {
    const AsyncComponent = this.state.creatable
      ? Select.AsyncCreatable
      : Select.Async;

    return (
      <section>
        <Form horizontal>
          <h3 className="section-heading">U.S. Cities (Async with axios)</h3>
          <AsyncComponent
            multi={this.state.multi}
            value={this.state.value}
            onChange={this.onChange}
            onValueClick={this.gotoCity}
            valueKey="id"
            labelKey="city"
            loadOptions={this.getCities}
            backspaceRemoves={this.state.backspaceRemoves} />
          <article>
            <Radio checked={this.state.multi} onChange={this.switchToMulti}>Multiselect</Radio>
            <Radio checked={!this.state.multi} onChange={this.switchToSingle}>Single Value</Radio>
          </article>
          <article>
            <Checkbox checked={this.state.creatable} onChange={this.toggleCreatable}>Creatable?</Checkbox>
            <Checkbox checked={this.state.backspaceRemoves} onChange={this.toggleBackspaceRemoves}>Backspace Removes?</Checkbox>
          </article>
          <article className="hint">This example uses axios for showing Async options with Promises</article>
        </Form>
        <p>You selected {JSON.stringify(this.state.value)}</p>
      </section>
    );
  }
}

export default Cities;
