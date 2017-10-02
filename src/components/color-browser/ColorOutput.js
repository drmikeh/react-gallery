import React from 'react';
import PropTypes from 'prop-types';
import './ColorOutput.css';
import { rgbToHsl, getComplement } from './Color';

const ColorOutput = ({red, green, blue}) => {
  const divStyles = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`
  };
  const hsl = rgbToHsl({ R: red, G: green, B: blue });
  const complementColor = getComplement({ R: red, G: green, B: blue });
  const pStyles = {
    color: `rgb(${complementColor.R}, ${complementColor.G}, ${complementColor.B})`
  };
  const round2 = (n) => Math.round(n * 100) / 100;
  return (
    <div className="color-output" style={divStyles}>
      <h1 style={pStyles}>RGB: {red}, {green}, {blue}</h1>
      <h4 className='xsmall' style={pStyles}>HSL: {round2(hsl.H)}, {round2(hsl.S)}, {round2(hsl.L)}</h4>
    </div>
  );
};

ColorOutput.propTypes = {
  red: PropTypes.number.isRequired,
  green: PropTypes.number.isRequired,
  blue: PropTypes.number.isRequired
};

export default ColorOutput;
