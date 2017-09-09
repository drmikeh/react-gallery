import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/todos'>Todos</Link></li>
          <li><Link to='/clock'>Clock</Link></li>
          <li><Link to='/greetings'>Greetings</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
