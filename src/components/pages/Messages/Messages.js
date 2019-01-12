import React from 'react';
import './Messages.scss';
import messageRequests from '../../../helpers/data/messageRequests';
import SingleMessage from '../SingleMessages/SingleMessage';

class Messages extends React.Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    messageRequests.getAllMessages()
      .then((messages) => {
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
