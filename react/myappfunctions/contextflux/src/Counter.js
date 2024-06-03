import React, { useContext } from "react";
import AppContext from "./AppContext";
import { incrementCounter, resetCounter } from "./Actions";

const Counter = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleClick = () => {
    dispatch(incrementCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={handleClick}>Click Here</button>
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
