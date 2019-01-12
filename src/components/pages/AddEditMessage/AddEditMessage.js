import React from 'react';
import './AddEditMessage.scss';

const defaultMessage = {
  uid: '',
  message: '',
  timestamp: 0,
  isEdited: false,
};

class AddEditMessage extends React.Component {
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

render() {
  const { newMessage } = this.state;
  return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button className="btn btn-primary" id="basic-addon1">send</button>
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
