import React from 'react';
import ToggleVisibility from './ToggleVisibility';

const Greeting = ({title, message}) => (
  <div style={{ marginTop: "10px" }}>
    <h3>Title: {title}</h3>
    <p>Message: {message}</p>
  </div>
);

export default ToggleVisibility(Greeting);
