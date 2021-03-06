import React from 'react';
import PropTypes from 'prop-types';
import './SingleMessage.scss';
import messagesShape from '../../../helpers/propz/messagesShape';
import authRequests from '../../../helpers/data/authRequests';

class SingleMessage extends React.Component {
  static propTypes = {
    message: messagesShape,
    deleteSingleMessage: PropTypes.func,
    passMessageToEdit: PropTypes.func,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleMessage, message } = this.props;
    deleteSingleMessage(message.id);
  }

  editEvent = (e) => {
    e.preventDefault();
    const { passMessageToEdit, message } = this.props;
    passMessageToEdit(message.id);
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
              <button className="btn btn-primary edit-button ml-3" onClick={this.editEvent}>
                <i className="fas fa-pencil-alt"></i>
              </button>
            </span>
          </div>
        );
      }
      return <span className="col"></span>;
    };
    const makeEdited = () => {
      if (this.props.message.isEdited === true) {
        return (
          <div className="singleMessage row pt-2 pb-2">
            <span className="col user">{message.userName}<small className="text-muted edited-text">Edited</small></span>
            <span className="col message">{message.message}</span>
            {makeButtons()}
          </div>
        );
      }
      return (
          <div className="singleMessage row pt-2 pb-2">
            <span className="col user">{message.userName}</span>
            <span className="col message">{message.message}</span>
            {makeButtons()}
          </div>
      );
    };

    return (
      makeEdited()
    );
  }
}

export default SingleMessage;
