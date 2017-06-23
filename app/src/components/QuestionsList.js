import React, { Component } from 'react';
import AddQuestion from './AddQuestion';
import * as actions from '../actions';



export default class QuestionsList extends Component {

  state = {
    questions: []
  }


  addQuestionCallback = state => {
    console.log(this.props.parent.actions);
    actions.addQuestion(state);
  }

  render() {

    return (
      <div className="questions-list">
        <h3>QuestionsList</h3>
        <div className="questions">

        </div>
        <AddQuestion ref={instance => this.refs=instance} addQuestionCallback={this.addQuestionCallback} {...this.props}/>
      </div>
    )
  }
}


{/*questions.map((item) => {
  return (
    <div className="q-item" key={item.id}>
      <h4>{item.title}</h4>
      <p>{item.text}</p>
    </div>
  );
})*/}
