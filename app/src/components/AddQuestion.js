import React, { Component } from 'react';

export default class AddQuestion extends Component {

  state = {
    question: {
      title: '',
      text: ''
    }
  }

  addQuestion = e => {
    this.setState({question: { title: e.target.value, text: '' }})
  }

  render() {
    return (
      <div className="add-question">
        <input type="text" onChange={this.addQuestion} />

        <div className="question-preview">
            <p>{this.state.question.title}</p>
            <p>{this.state.question.text}</p>
        </div>
      </div>
    )
  }
}
