import React from 'react';
import PropTypes from 'prop-types';

const Range = ({name, label, min, max, value, onChange}) => {
  return (
    <div>
      <label htmlFor="{name}">{label}:</label>
      <input
        type="range"
        name={name}
        id={name}
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
      <label>{value}</label>
    </div>
  );
};

Range.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func
};

Range.defaultProps = {
  value: 0
};

export default Range;
