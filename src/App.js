import React, { useState } from "react";
import "./app.css";
import Counter from "./components/Counter";

const App = () => {
  const [count, setCount] = useState(0);

  // const changeCount = () => {
  //   setCount(5);
  // };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count === 0) {
      return alert("No more minus please!");
    }
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className="app">
      <header>
        <h1>Random Number</h1>
      </header>
      <br />
      <Counter
        inc={increaseCount}
        dec={decreaseCount}
        reset={resetCount}
        count={count}
      />
    </div>
  );
};

export default App;
