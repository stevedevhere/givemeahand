import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize'
import axios from 'axios';

export default class Home extends Component {

  registerSubmit = event => {
    event.preventDefault();
    let p, e;

    [...this.form.elements].map(item => {
      if(item.localName == 'input') {
        if(item.type == 'email') e = item.value;
        if(item.type == 'password') p = item.value;

        item.value = '';
      }
    });

    axios.post('server/requests/register.js', {})
      .then((resolve, reject) => {
        console.log(resolve, reject);
      });

  }
  componentWillUnmount() {
    this.email = null;
    this.password = null;
  }
  render() {
    return (
      <div className="register">
        <h1>Зарегестрироваться</h1>
        <form className="register-form" ref={instance => this.form = instance}>
          <input type="email" placeholder="Your email"/>
          <input type="password" placeholder="Your password"/>
          <Button waves='light' onClick={this.registerSubmit}>Submit</Button>
        </form>
      </div>
    )
  }

}
