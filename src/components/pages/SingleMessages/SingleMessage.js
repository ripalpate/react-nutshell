import React from 'react';
import PropTypes from 'prop-types';
import './SingleMessage.scss';
import messagesShape from '../../../helpers/propz/messagesShape';
import authRequests from '../../../helpers/data/authRequests';

class SingleMessage extends React.Component {
  static propTypes = {
    message: messagesShape,
    deleteSingleMessage: PropTypes.func,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleMessage, message } = this.props;
    deleteSingleMessage(message.id);
  }

  render() {
    const { message } = this.props;
    const uid = authRequests.getCurrentUid();
    const makeButtons = () => {
      if (message.uid === uid) {
        return (
          <div className= "col text-center">
            <span className="">
              <button className="btn btn-danger delete-button" onClick={this.deleteEvent}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </span>
            <span className="">
              <button className="btn btn-primary edit-button ml-3">
                <i className="fas fa-pencil-alt"></i>
              </button>
            </span>
          </div>
        );
      }
      return <span className="col"></span>;
    };

    return (
      <div className="singleMessage row pt-2 pb-2">
        <span className="col user">{message.userName}</span>
        <span className="col message">{message.message}</span>
        {makeButtons()}
      </div>
    );
  }
}

export default SingleMessage;
