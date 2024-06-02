import React, { useState, useEffect, useRef } from "react";

const AutomaticCounter = ({ endCounter }) => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 100);

    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (count === 30) {
      setCount(0);
      endCounter();
    }
  }, [count, endCounter]);

  return <h2>{count}</h2>;
};

export default AutomaticCounter;
