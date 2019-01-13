import React from 'react';
import './SingleMessage.scss';
import messagesShape from '../../../helpers/propz/messagesShape';

class SingleMessage extends React.Component {
  static propTypes = {
    message: messagesShape,
  }

  render() {
    const { message } = this.props;
    return (
      <div className="singleMessage row mt-3">
        <span className="col user">{message.userName}</span>
        <span className="col message">{message.message}</span>
      </div>
    );
  }
}

export default SingleMessage;
