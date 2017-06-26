import React, { Component } from 'react';
import * as actions from '../actions';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class AddQuestion extends Component {

  constructor() {
    super();
    this.form = {};
  }

  state = {
    title: '',
    text: ''
  }

  addQuestion = e => {
    e.preventDefault();
    console.log(this.form);

    let title = this.form.title.value.trim();
    let text = this.form.text.value.trim();

    if(title !== '' && text !== '') {
      let state = { title: this.form.title.value, text: this.form.text.value };
      this.props.actions.addQuestion(state);

      this.form.title.value='';
      this.form.text.value='';
    }

  }

  render() {
    console.log('AddQuestion: ', this );
    return (
      <div className="add-question">
        <form className="q-form">
          <input type="text" ref={val => this.form.title = val}/>
          <textarea type="text" ref={val => this.form.text = val}></textarea>
          <input type="submit" onClick={this.addQuestion} value="submit" />
        </form>

        <div className="question-preview">
            <p>{this.state.title}</p>
            <p>{this.state.text}</p>
        </div>
      </div>
    )
  }
}



const mapStateToProps = state => {
  return {data: state.questions};
};

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
};

const AddQuestionContainer = connect( mapStateToProps, mapDispatchToProps )( AddQuestion );
export default AddQuestionContainer;
// #  connect ( stateToProps [, ~actions from reducers~, applyMiddleware() ] )(~Main component className~)
