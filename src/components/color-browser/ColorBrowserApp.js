import React from 'react';
import Range from './Range';
import ColorOutput from './ColorOutput';

import { Panel, Button } from 'react-bootstrap';
import './color-browser.css';

class ColorBrowserApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256)
    };
  }
  updateColor(e) {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: Number(e.target.value)
    });
  }
  getRandomColor() {
    this.setState({
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256)
    });
  }
  render() {
    return (
      <Panel header='Color Browser' className="example">
        <Range
          name="red"
          label="Red"
          min={0}
          max={255}
          value={this.state.red}
          onChange={this.updateColor.bind(this)}
        />
        <Range
          name="green"
          label="Green"
          min={0}
          max={255}
          value={this.state.green}
          onChange={this.updateColor.bind(this)}
        />
        <Range
          name="blue"
          label="Blue"
          min={0}
          max={255}
          value={this.state.blue}
          onChange={this.updateColor.bind(this)}
        />
        <br/>
        <ColorOutput
          red={this.state.red}
          green={this.state.green}
          blue={this.state.blue}
        />
        <br/>
        <Button bsStyle="primary" onClick={this.getRandomColor.bind(this)}>Random Color</Button>
      </Panel>
    );
  }
}

export default ColorBrowserApp;
