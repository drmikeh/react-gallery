import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Config from '../config';
import Navbar from './Navbar';
import ClockApp from './clock/ClockApp';
import TimerApp from './timer/TimerApp';
import ToastrApp from './toastr/ToastrApp';
import CounterApp from './counter/CounterApp';
import GreeterApp from './greeter/GreeterApp';
import TodoApp from './todos/TodoApp';
import ColorBrowserApp from './color-browser/ColorBrowserApp';
import QuoteMgr from './quote-mgr/QuoteMgr';
import SuggestApp from './suggest/SuggestApp';
import DataTableApp from './data-table/DataTableApp';
import MortgageCalcApp from './mortgage-calculator/MortgageCalcApp';
import SampleCharts from './highchart-samples/SampleCharts';
import VideoApp from './video/VideoApp';
import QuizApp from './quiz/QuizApp';
import ErrorTest from './error-test/ErrorTest';

import { Panel, Grid, Row, Col } from 'react-bootstrap';
import './App.css';

const HomePage  = (props) => ( <Panel header='Home'  className="example">Have a look around!</Panel> );
const AboutPage = (props) => ( <Panel header='About' className="example">Just some fun React Examples.</Panel> );

class App extends Component {
  render() {
    return (
      <Router basename={Config.basename}>
        <section className="App">
          <Grid>
            <Row>
              <Col md={2}>
                <header><Navbar /></header>
              </Col>
              <Col md={10}>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/greetings" component={GreeterApp} />
                  <Route path="/counter" component={CounterApp} />
                  <Route path="/clock" component={ClockApp} />
                  <Route path="/timer" component={TimerApp} />
                  <Route path="/toastr" component={ToastrApp} />
                  <Route path="/todos" component={TodoApp} />
                  <Route path="/color-browser" component={ColorBrowserApp} />
                  <Route path="/quotes" component={QuoteMgr} />
                  <Route path="/suggest" component={SuggestApp} />
                  <Route path="/data-table" component={DataTableApp} />
                  <Route path="/mortgage" component={MortgageCalcApp} />
                  <Route path="/charts" component={SampleCharts} />
                  <Route path="/quiz" component={QuizApp} />
                  <Route path="/video-player" component={VideoApp} />
                  <Route path="/error-test" component={ErrorTest} />
                  <Route path="/about" component={AboutPage} />
                </Switch>
              </Col>
            </Row>
          </Grid>
        </section>
      </Router>
    );
  }
}

export default App;
