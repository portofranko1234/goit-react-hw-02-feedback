import React from "react";
import PropTypes from "prop-types";

function Notification({ message }) {
  return <p>{message}</p>;
}
export default Notification;
Notification.defaultProps = {
  message: "No message value",
};
Notification.propTypes = { message: PropTypes.string };
