import React from 'react';
import './AddEditMessage.scss';

class AddEditMessage extends React.Component {
  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button class="btn btn-primary" id="basic-addon1">send</button>
        </div>
        <input
        type="text"
        className="form-control"
        id="message"
        placeholder="Enter Your Message Here"
        aria-describedby="message-help"/>
      </div>
    );
  }
}

export default AddEditMessage;
