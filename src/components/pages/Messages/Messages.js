import React from 'react';
import './Messages.scss';
import smashMessageRequests from '../../../helpers/data/smashRequests';
import SingleMessage from '../SingleMessages/SingleMessage';
import AddEditMessage from '../AddEditMessage/AddEditMessage';
import messageRequests from '../../../helpers/data/messageRequests';

class Messages extends React.Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    smashMessageRequests.getAllMessagesWithUserInfo()
      .then((messages) => {
        if (messages.length > 1) {
          messages.shift(messages.length - 1, messages.length);
        }
        this.setState({ messages });
      })
      .catch(err => console.log(err));
  }

  inputSubmitEvent = (newMessage) => {
    messageRequests.createMessage(newMessage)
      .then(() => {
        smashMessageRequests.getAllMessagesWithUserInfo()
          .then((messages) => {
            if (messages.length > 1) {
              messages.shift(messages.length - 1, messages.length);
            }
            this.setState({ messages });
          });
      }).catch(err => console.error(err));
  }

  render() {
    const singleMessageComponent = this.state.messages.map(message => (
      <SingleMessage
      message={message}
      key={message.id}
      />
    ));
    return (
      <div className="Messages">
        <h2 className="heading">Messages</h2>
        {singleMessageComponent}
        <AddEditMessage
        onSubmit={this.inputSubmitEvent}/>
      </div>
    );
  }
}

export default Messages;
