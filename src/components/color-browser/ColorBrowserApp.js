import React from 'react';
import Range from './Range';
import ColorOutput from './ColorOutput';
import './Range.css';

class ColorBrowserApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 100,
      green: 150,
      blue: 200
    };
  }
  updateColor(e) {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: Number(e.target.value)
    });
  }
  render() {
    return (
      <div>
        <h1>Color Browser</h1>
        <Range name="red" label="Red" min={0} max={255} value={this.state.red} onChange={this.updateColor.bind(this)} />
        <Range name="green" label="Green" min={0} max={255} value={this.state.green} onChange={this.updateColor.bind(this)} />
        <Range name="blue" label="Blue" min={0} max={255} value={this.state.blue} onChange={this.updateColor.bind(this)} />
        <br/>
        <ColorOutput red={this.state.red} green={this.state.green} blue={this.state.blue} />
      </div>
    );
  }
}

export default ColorBrowserApp;
