import React, { Component } from 'react';
import UserProfile from './UserProfile';
import Register from './Register';

export default class Home extends Component {
  render() {

    console.log(this);
    let th = this;
    return (
      <div>
        {th.props.user !== undefined ? <UserProfile user={th.props.user}/> : <Register />}
      </div>
    )
  }
}
