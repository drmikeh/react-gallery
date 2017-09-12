import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import ClockApp from './clock/ClockApp';
import TimerApp from './timer/TimerApp';
import CounterApp from './counter/CounterApp';
import GreeterApp from './greeter/GreeterApp';
import TodoApp from './todos/TodoApp';
import ColorBrowserApp from './color-browser/ColorBrowserApp';

import './App.css';

const HomePage = (props) => ( <article> <h1>Home</h1> </article> );
const AboutPage = (props) => ( <article> <h1>About</h1> </article> );

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Navbar />
          </header>

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/greetings" component={GreeterApp} />
            <Route path="/counter" component={CounterApp} />
            <Route path="/clock" component={ClockApp} />
            <Route path="/timer" component={TimerApp} />
            <Route path="/todos" component={TodoApp} />
            <Route path="/color-browser" component={ColorBrowserApp} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
