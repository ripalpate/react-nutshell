import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import authRequests from '../../../helpers/data/authRequests';
import './AddEditMessage.scss';

const getTimeStamp = moment().valueOf();
const defaultMessage = {
  uid: '',
  message: '',
  timestamp: getTimeStamp,
  isEdited: false,
};

class AddEditMessage extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
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
  const { onClick } = this.props;
  const myMessage = { ...this.state.newMessage };
  myMessage.uid = authRequests.getCurrentUid();
  onClick(myMessage);
  this.setState({ newMessage: defaultMessage });
}

handleEnterInput = (target) => {
  if (target.key === 'Enter') {
    const { onKeyUp } = this.props;
    const myMessage = { ...this.state.newMessage };
    myMessage.uid = authRequests.getCurrentUid();
    onKeyUp(myMessage);
    this.setState({ newMessage: defaultMessage });
  }
}

render() {
  const { newMessage } = this.state;
  return (
      <div className="input-group mt-3 mb-3">
        <div className="input-group-prepend" onClick={this.inputSubmit}>
          <button className="btn btn-primary" type="button" id="basic-addon1">send</button>
        </div>
        <input
        type="text"
        className="form-control"
        id="message"
        placeholder="Enter Your Message Here"
        aria-describedby="message-help"
        value={newMessage.message}
        onChange={this.messageChange}
        onKeyUp={this.handleEnterInput}
        />
      </div>
  );
}
}

export default AddEditMessage;