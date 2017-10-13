import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { Form, Checkbox } from 'react-bootstrap';

const FLAVORS = [
	{ label: 'Chocolate', value: 'chocolate' },
	{ label: 'Vanilla', value: 'vanilla' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Caramel', value: 'caramel' },
	{ label: 'Cookies and Cream', value: 'cookiescream' },
	{ label: 'Peppermint', value: 'peppermint' },
];

const WHY_WOULD_YOU = [
	{ label: 'Chocolate (are you crazy?)', value: 'chocolate', disabled: true },
].concat(FLAVORS.slice(1));

class MultiSelectField extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			disabled: false,
			crazy: false,
			stayOpen: false,
			value: [],
		};
	}

	handleSelectChange(value) {
		console.log('You selected:', value);
		this.setState({ value });
	}

	toggleCheckbox (e) {
		this.setState({
			[e.target.name]: e.target.checked,
		});
	}

	render () {
		const { crazy, disabled, stayOpen, value } = this.state;
		const options = crazy ? WHY_WOULD_YOU : FLAVORS;
		return (
			<Form horizontal>
				<h3 className="section-heading">{this.props.label}</h3>
				<Select
					closeOnSelect={!stayOpen}
					disabled={disabled}
					multi
					onChange={this.handleSelectChange.bind(this)}
					options={options}
					placeholder="Select your favourite(s)"
					simpleValue
					value={value}
				/>

        <Checkbox name="disabled" checked={disabled} onChange={this.toggleCheckbox.bind(this)}>Disable the control</Checkbox>
				<Checkbox name="crazy" checked={crazy} onChange={this.toggleCheckbox.bind(this)}>I don't like Chocolate (disabled the option)</Checkbox>
        <Checkbox name="stayOpen" checked={stayOpen} onChange={this.toggleCheckbox.bind(this)}>Stay open when an Option is selected</Checkbox>
			</Form>
		);
	}
}

MultiSelectField.displayName = 'MultiSelectField';
MultiSelectField.propTypes = {
  label: PropTypes.string
};

export default MultiSelectField;
