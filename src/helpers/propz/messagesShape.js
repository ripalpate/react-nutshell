import PropTypes from 'prop-types';

const messagesShape = PropTypes.shape({
  uid: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  isEdited: PropTypes.bool.isRequired,
});

export default messagesShape;
