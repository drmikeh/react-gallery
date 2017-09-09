import React from 'react';
import PropTypes from 'prop-types';

const Greeter = ({name}) => {
  return <h4>Hello {name}</h4>;
};

Greeter.propTypes = {
  name: PropTypes.string.isRequired
};

Greeter.defaultProps = {
  name: 'Stranger'
};

export default Greeter;
