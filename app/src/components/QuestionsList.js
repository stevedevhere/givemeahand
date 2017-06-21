import React, { Component } from 'react';
import AddQuestion from './AddQuestion';
import Home from './Home';


export default class QuestionsList extends Component {

  state = {
    // questions:
  }

  refs = []

  componentWillMount() {
    console.log('te');
  }

  render() {
    console.log(this);
    const {questions} = this.state;
    return (
      <div className="questions-list">
        <h3>QuestionsList</h3>
        <div className="questions">

        </div>
        <Home ref={instance => this.refs = instance}/>
      <AddQuestion ref={instance => this.refs=instance} {...this}/>
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
