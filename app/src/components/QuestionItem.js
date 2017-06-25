import React, { Component } from 'react';
import * as actions from '../actions';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class QuestionItem extends Component {
  componentDidMount() {

  }

  render() {
    console.log("QuestionItem: ", this);
    return (
      <div className="question-item">
          <h3>question item</h3>
          {this.props.data.map(item => {
            return (
              <div className="qi-container" key={item.id}>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.text}</p>
              </div>
            )
          })}
        
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {data: state.questions.filter(item => +item.id === +ownProps.params.questionID ? item : null)};
};

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
};

const QuestionItemContainer = connect( mapStateToProps, mapDispatchToProps )( QuestionItem );
export default QuestionItemContainer;
// #  connect ( stateToProps [, ~actions from reducers~, applyMiddleware() ] )(~Main component className~)
