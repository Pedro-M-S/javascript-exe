import React, { useState } from "react";

const Counter = () => {
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
      <button onClick={handleClick}>Click Here</button>
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
