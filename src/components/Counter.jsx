import React from "react";

const Counter = (props) => {
  console.log(props);
  return <p>Counter:{props.count}</p>;
};

export default Counter;
