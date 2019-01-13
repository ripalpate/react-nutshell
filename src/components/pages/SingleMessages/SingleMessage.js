import React from 'react';
import './SingleMessage.scss';
import messagesShape from '../../../helpers/propz/messagesShape';
import authRequests from '../../../helpers/data/authRequests';

class SingleMessage extends React.Component {
  static propTypes = {
    message: messagesShape,
  }

  render() {
    const { message } = this.props;
    const uid = authRequests.getCurrentUid();
    const makeButtons = () => {
      if (message.uid === uid) {
        return (
            <span className="col text-right">
              <button className="btn btn-danger">
                <i className="fas fa-trash-alt"></i>
              </button>
            </span>
        );
      }
      return <span className="col"></span>;
    };

    return (
      <div className="singleMessage row mt-3">
        <span className="col user">{message.userName}</span>
        <span className="col message">{message.message}</span>
        {makeButtons()}
      </div>
    );
  }
}

export default SingleMessage;
