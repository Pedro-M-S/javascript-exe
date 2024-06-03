import React from "react";
import AppContext from "./AppContext";

const Counter = () => {
  const { count, handleCountIncrement, handleCountReset } =
    React.useContext(AppContext);

  const handleClick = () => {
    handleCountIncrement();
  };

  const handleReset = () => {
    handleCountReset();
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
