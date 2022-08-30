import React from "react";
import "./app.css";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div className="app">
      <h1>Random Number</h1>
      <br />
      <Counter count={5} />
      <Counter myArray={[1, 2, 3]} firstName="Shadi" />
      <Counter count={20}>This is my counter</Counter>
    </div>
  );
};

export default App;
