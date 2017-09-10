import React from 'react';
import PropTypes from 'prop-types';
import './ColorOutput.css';

const ColorOutput = ({red, green, blue}) => {
  const styles = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`
  };
  return (
    <div className="color-output" style={styles}>
      <p>{red}, {green}, {blue}</p>
    </div>
  );
};

ColorOutput.propTypes = {
  red: PropTypes.number.isRequired,
  green: PropTypes.number.isRequired,
  blue: PropTypes.number.isRequired
};

export default ColorOutput;
