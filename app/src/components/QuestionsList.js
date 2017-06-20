import React, { Component } from 'react';
import AddQuestion from './AddQuestion';

export default class QuestionsList extends Component {
  render() {
    return (
      <div className="questions-list">
        <h3>QuestionsList</h3>
        <AddQuestion />
      </div>
    )
  }
}
