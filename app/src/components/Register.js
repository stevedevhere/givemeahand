import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize'

export default class Home extends Component {

  render() {
    return (
      <div className="register">
        <h1>Зарегестрироваться</h1>
        <form className="register-form">
          <input type="email" ref={email => this.email}/>
          <input type="password" ref={password => this.password}/>
          <Button waves='light'>Submit</Button>
        </form>
      </div>
    )
  }

}
