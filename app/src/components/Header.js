import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {

  render() {

    console.log(this);

    return (
      <header>
        <h1>Header</h1>

        <nav>
          <ul>
            <li><Link to={`/`}>home</Link></li>
            <li><Link to={`/questions`}>questions list</Link></li>
            <li><Link to={`/`}></Link></li>
            <li><Link to={`/`}></Link></li>
          </ul>
        </nav>
      </header>
    );
  }

}
