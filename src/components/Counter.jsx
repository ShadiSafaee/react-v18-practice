import React from "react";
import PropTypes from "prop-types";

const Counter = ({ inc, dec, reset, count }) => {
  return (
    <div>
      <h1 style={{ color: count === 0 ? "red" : "green" }}>{count}</h1>
      <button
        onClick={inc}
        style={{ background: count === 0 ? "red" : "yellow" }}
      >
        +
      </button>
      <button onClick={dec} disabled={count === 0}>
        -
      </button>
      <br />
      <button onClick={reset}>reset</button>
    </div>
  );
};

// Counter.defaultProps = {
//   count: 25,
// };
Counter.propTypes = {
  inc: PropTypes.func,
  dec: PropTypes.func,
  reset: PropTypes.func,
  count: PropTypes.number,
};
export default Counter;
