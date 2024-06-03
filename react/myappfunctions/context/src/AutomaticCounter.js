import React, { useState, useEffect, useRef } from "react";
import AppContext from "./AppContext";

const AutomaticCounter = () => {
  const { counterActive, handleUpdateCounter } = React.useContext(AppContext);

  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (counterActive) {
      timerRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 100);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [counterActive]);

  useEffect(() => {
    if (count === 30) {
      setCount(0);
      handleUpdateCounter();
    }
  }, [count, handleUpdateCounter]);

  if (counterActive) {
    return <h2>{count}</h2>;
  } else {
    return <button onClick={handleUpdateCounter}>Restart Counter</button>;
  }
};

export default AutomaticCounter;
