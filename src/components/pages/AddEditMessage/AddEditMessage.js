import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import authRequests from '../../../helpers/data/authRequests';
import './AddEditMessage.scss';
import messageRequests from '../../../helpers/data/messageRequests';

const defaultMessage = {
  uid: '',
  message: '',
  timestamp: 0,
  isEdited: false,
};

class AddEditMessage extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    isEditing: PropTypes.bool,
    editId: PropTypes.string,
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

settingIsEdited = (myText) => {
  const myMessage = myText;
  myMessage.uid = authRequests.getCurrentUid();
  if (this.props.isEditing === false) {
    myMessage.timestamp = moment().valueOf();
  } else {
    myMessage.isEdited = true;
  }
}

inputSubmit = (e) => {
  e.preventDefault();
  const { onClick } = this.props;
  const myMessage = { ...this.state.newMessage };
  this.settingIsEdited(myMessage);
  onClick(myMessage);
  this.setState({ newMessage: defaultMessage });
}

handleEnterInput = (target) => {
  if (target.key === 'Enter') {
    const { onKeyUp } = this.props;
    const myMessage = { ...this.state.newMessage };
    this.settingIsEdited(myMessage);
    onKeyUp(myMessage);
    this.setState({ newMessage: defaultMessage });
  }
}

componentDidUpdate(prevProps) {
  const { isEditing, editId } = this.props;
  if (prevProps !== this.props && isEditing) {
    messageRequests.getSingleMessage(editId)
      .then((message) => {
        this.setState({ newMessage: message.data });
      })
      .catch(err => console.error(err));
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
        autoFocus
        />
      </div>
  );
}
}

export default AddEditMessage;
