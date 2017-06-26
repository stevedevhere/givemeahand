
import React, { Component } from 'react';


export default class ChatForm extends Component {

  send = (e) => {
    if(e.which === 13) {
      this.props.addMessage({q: e.target.value});
    }
  }

  render() {
    console.log("ChatForm:", this);
    return (
      <div className="chat-form">
        <textarea onKeyUp={this.send}></textarea>
      </div>
    )
  }
}
//
// const mapStateToProps = state => {
//   return {data: state.questions};
// };
//
// const mapDispatchToProps = dispatch => {
//   return {actions: bindActionCreators(actions, dispatch)}
// };
//
// const ChatFormContainer = connect( mapStateToProps, mapDispatchToProps )( ChatForm );
// export default ChatFormContainer;
