import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../../helpers/data/authRequests';
import './AddEditMessage.scss';

const defaultMessage = {
  uid: '',
  message: '',
  timestamp: 0,
  isEdited: false,
};

class AddEditMessage extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  state = {
    newMessage: defaultMessage,
  }

inputFieldStringState = (name, e) => {
  e.preventDefault();
  const tempMessage = { ...this.state.newMessage };
  tempMessage[name] = e.target.value;
  this.setState({ newMessage: tempMessage });
}

messageChange = e => this.inputFieldStringState('message', e);

inputSubmit = (e) => {
  e.preventDefault();
  const { onSubmit } = this.props;
  const myMessage = { ...this.state.newMessage };
  myMessage.uid = authRequests.getCurrentUid();
  onSubmit(myMessage);
  this.setState({ newMessage: defaultMessage });
}

render() {
  const { newMessage } = this.state;
  return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button className="btn btn-primary" id="basic-addon1" onSubmit={this.inputSubmit}>send</button>
        </div>
        <input
        type="text"
        className="form-control"
        id="message"
        placeholder="Enter Your Message Here"
        aria-describedby="message-help"
        value={newMessage.message}
        onChange={this.messageChange}
        />
      </div>
  );
}
}

export default AddEditMessage;
