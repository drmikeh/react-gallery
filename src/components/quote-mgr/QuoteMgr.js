import React from 'react';
import axios from 'axios';
import Config from '../config';
import Quote from './Quote';
import { Panel } from 'react-bootstrap';
import './quotes.css';

class QuoteMgr extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      quotes: []
    };
  }

  async componentDidMount() {
    try {
      const quotes = (await axios.get(`${Config.basename}/quotes.json`)).data;
      this.setState({ quotes });
    }
    catch (err) {
      alert(`ERROR: ${err}`);
    }
  }

  render() {
    const quotes = this.state.quotes.map( quote => {
      return <Quote key={quote.id} {...quote} />;
    })
    return (
      <Panel header='Quotes' className="example">
        {quotes}
      </Panel>
    );
  }
}

QuoteMgr.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default QuoteMgr;
