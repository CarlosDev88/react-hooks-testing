import { useState } from "react";

export const useCounter = (val = 10) => {
  const [counter, setCounter] = useState(val);

  const increment = (factor = 1) => {
    setCounter((current) => current + factor);
  };
  const decrement = (factor = 1) => {
    setCounter((current) => current - factor);
  };
  const reset = () => setCounter(val);

  return { counter, increment, decrement, reset };
};
