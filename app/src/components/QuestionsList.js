import React, { Component } from 'react';
import AddQuestion from './AddQuestion';

import * as actions from '../actions';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';


class QuestionsList extends Component {

  state = {
    questions: []
  }


  render() {
    console.log('QL: ',this.props.data);
    return (
      <div className="questions-list">
        <h3>QuestionsList</h3>
        <div className="questions">
          {this.props.data.map((item) => {
            return (
              <div className="q-item" key={item.id}>
                <Link to={`/question/${item.id}`}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </Link>
              </div>
            );
          })}
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

const QuestionsListContainer = connect( mapStateToProps, mapDispatchToProps )( QuestionsList );
export default QuestionsListContainer;
// #  connect ( stateToProps [, ~actions from reducers~, applyMiddleware() ] )(~Main component className~)
