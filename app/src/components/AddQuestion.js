import React, { Component } from 'react';
import * as actions from '../actions';

export default class AddQuestion extends Component {

  state = {
    title: '',
    text: ''
  }

  addQuestion = e => {
    if(e.keyCode === 13) {
      let state = { title: e.target.value, text: '' };
      this.setState(state);
      actions.addQuestion(state);
    }
  }

  render() {
    console.log(this);
    return (
      <div className="add-question">
        <input type="text" onKeyDown={this.addQuestion} />

        <div className="question-preview">
            <p>{this.state.title}</p>
            <p>{this.state.text}</p>
        </div>
      </div>
    )
  }
}
