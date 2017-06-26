import React, { Component } from 'react';
import {addMessage, deleteMessage} from '../actions';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ChatForm from './helpers/ChatForm';
const actions = {addMessage, deleteMessage};

class Chat extends Component {
  render() {
    console.log("Chat:", this);
    return (
      <div className="chat-wrapper">
        <h3>Chat by message id: {this.props.params.messageID}</h3>

        <div className="chat-container">
          <div className="messages-container">
            <div className="m-item">
              <p>Hello</p>
            </div>
            <div className="m-item">
              <p>Hi, how are you?</p>
            </div>
          </div>

          <ChatForm addMessage={this.props.actions.addMessage}/>
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

const ChatContainer = connect( mapStateToProps, mapDispatchToProps )( Chat );
export default ChatContainer;
