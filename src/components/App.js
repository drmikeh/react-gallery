import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Clock from './Clock';
import Greeter from './Greeter';
import TodoApp from './todos/TodoApp';
import './App.css';

const HomePage = (props) => ( <article> <h1>Home</h1> </article> );
const AboutPage = (props) => ( <article> <h1>About</h1> </article> );

const GreeterPage = (props) => (
  <div>
    <Greeter name="Pat" />
    <Greeter name="Shane" />
    <Greeter name="Brandon" />
    <Greeter name="Mike" />
    <Greeter />
  </div>
);

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
            <Route path="/todos" component={TodoApp} />
            <Route path="/clock" component={Clock} />
            <Route path="/greetings" component={GreeterPage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
