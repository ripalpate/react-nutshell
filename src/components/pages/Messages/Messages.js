import React from 'react';
import './Messages.scss';
import smashMessageRequests from '../../../helpers/data/smashRequests';
import SingleMessage from '../SingleMessages/SingleMessage';

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
      </div>
    );
  }
}

export default Messages;
