import React from "react";

const Counter = (props) => {
  console.log(props);
  return (
    <div>
      <p>Counter:{props.count || 90}</p>
      <p>{props.children}</p>
    </div>
  );
};

// Counter.defaultProps = {
//   count: 25,
// };

export default Counter;
