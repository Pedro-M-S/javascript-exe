import React, { useEffect, useRef, useContext } from "react";
import AppContext from "./AppContext";
import {
  toggleAutoCounter,
  incrementAutoCounter,
  resetAutoCounter,
} from "./Actions";

const AutomaticCounter = () => {
  const { state, dispatch } = useContext(AppContext);

  const timerRef = useRef(null);

  useEffect(() => {
    if (state.autoCounter) {
      timerRef.current = setInterval(() => {
        dispatch(incrementAutoCounter());
      }, 100);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [state.autoCounter, dispatch]);

  useEffect(() => {
    if (state.aCount === 30) {
      dispatch(resetAutoCounter());
      dispatch(toggleAutoCounter());
    }
  }, [state.aCount, dispatch]);

  if (state.autoCounter) {
    return <h2>{state.aCount}</h2>;
  } else {
    return (
      <button onClick={() => dispatch(toggleAutoCounter())}>
        Restart Counter
      </button>
    );
  }
};

export default AutomaticCounter;
