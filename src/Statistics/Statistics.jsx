import React from "react";
import PropTypes from "prop-types";
import Notification from "../Notification";

const Statistics = ({ good, bad, neutral, total, percentage }) => {
  return (
    <div>
      {total > 0 ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {percentage}%</li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

export default Statistics;

Statistics.defaultProps = {
  good: 0,
  bad: 0,
  total: 0,
  neutral: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  neutral: PropTypes.number,
  positivePercentage: PropTypes.number,
};
