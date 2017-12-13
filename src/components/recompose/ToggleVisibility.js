import React from 'react';
import { Button } from 'react-bootstrap';
import { compose, withState, withHandlers } from 'recompose';

const ToggleButton = ({ isVisible, toggleVisibility }) => (
  <Button bsStyle={isVisible ? 'danger' : 'success'} onClick={toggleVisibility}>{isVisible ? 'Hide' : 'Show'}</Button>
);

const showCss = {
  height: 'auto',
  opacity: 1,
  overflow: 'hidden',
  transition: 'opacity 0.2s linear'
};
const hideCss = {
  height: 0,
  opacity: 0,
  transition: 'opacity 0.2s linear'
}

const enhance = compose(
  withState('isVisible', 'toggleVis', true),
  withHandlers({
    toggleVisibility: ({ toggleVis, isVisible }) => {
      return (event) => {
        return toggleVis(!isVisible);
      };
    },
  })
);

const render = props => {
  const css = props.isVisible ? showCss : hideCss;
  return (
    <div>
      <ToggleButton {...props} />
      <div style={css}>{props.child}</div>
    </div>
  );
};

const ToggleVisibility = enhance(render);

export default (BaseComponent) => {
  return (props) => <ToggleVisibility child={BaseComponent(props)} />;
};
