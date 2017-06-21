import React, { Component } from 'react';
import AddQuestion from './AddQuestion';
import Home from './Home';
import store from '../store';




export default class QuestionsList extends Component {

  state = {
    questions: []
  }


  addQuestionCallback(state) {

  }

  render() {
    console.log('render');
    const {questions} = store.getState();
    return (
      <div className="questions-list">
        <h3>QuestionsList</h3>
        <div className="questions">
          {questions.map((item) => {
            return (
              <div className="q-item" key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
        <AddQuestion ref={instance => this.refs=instance} addQuestionCallback={this.addQuestionCallback}/>
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
