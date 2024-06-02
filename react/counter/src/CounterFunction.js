import React, { useState } from "react";

const CounterFunction = (props) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>Increment</button>
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterFunction;
