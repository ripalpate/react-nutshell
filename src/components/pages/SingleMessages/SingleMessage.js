import React from 'react';

import './SingleMessage.scss';

class SingleMessage extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <div className="singleMessage row mt-3">
        <span className="col user"> {message.uid}</span>
        <span className="col message">{message.message}</span>
      </div>
    );
  }
}

export default SingleMessage;
