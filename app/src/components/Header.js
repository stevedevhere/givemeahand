import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {

  render() {

    return (
      <header>
        <h1>Header</h1>

        <nav>
          <ul>
            <li><Link to={`/`}>home</Link></li>
            <li><Link to={`/questions`}>questions list</Link></li>
            <li><Link to={`/question/1`}>question item</Link></li>
            <li><Link to={`/im`}>Messages List</Link></li>
            <li><Link to={`/im/1`}>Chat</Link></li>
            <li><Link to={`/add-question`}>add-question</Link></li>
          </ul>
        </nav>
      </header>
    );
  }

}
