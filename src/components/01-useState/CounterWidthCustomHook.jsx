import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

export const CounterWidthCustomHook = () => {
  const { state, decrement, increment, reset } = useCounter(150);
  return (
    <>
      <h1>Counter Width Custom Hook: {state}</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>

      <button className="btn btn-danger" onClick={() => decrement(3)}>
        -1
      </button>

      <button className="btn btn-primary" onClick={() => reset()}>
        reset
      </button>
    </>
  );
};
