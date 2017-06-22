import React, { Component } from 'react';

export default class AddQuestion extends Component {

  state = {
    title: '',
    text: ''
  }

  addQuestion = e => {
    if(e.keyCode === 13) {
      let state = { title: e.target.value, text: '' };
      this.setState(state);
      e.target.value = '';
      this.props.addQuestionCallback(state);
    }
  }

  render() {
    console.log('AddQuestion: ', this );
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
