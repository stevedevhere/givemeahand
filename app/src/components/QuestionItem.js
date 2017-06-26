import React, { Component } from 'react';
import * as actions from '../actions';

import {connect} from 'react-redux';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';


class QuestionItem extends Component {
  componentDidMount() {

  }

  render() {
    console.log("QuestionItem: ", this);
    return (
      <div className="question-item">
          {this.props.data.map(item => {
            return (
              <article className="qi-container" key={item.id}>
                <h1>{item.title}</h1>
                <div className="q-content">
                  <p>{item.id}</p>
                  <p>{item.text}</p>
                </div>
                <Link to={`/im/${item.id}_${this.props.data.helperId}`} className="goto-im">Send Message</Link>
              </article>
            )
          })}
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {data: state.questions.filter(item => +item.id === +ownProps.params.questionID ? item : null), test: state};
};

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
};

const QuestionItemContainer = connect( mapStateToProps, mapDispatchToProps )( QuestionItem );
export default QuestionItemContainer;
// #  connect ( stateToProps [, ~actions from reducers~, applyMiddleware() ] )(~Main component className~)
