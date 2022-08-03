import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const LayoutEffect = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, error } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = data !== null && data[0];

  const [boxSize, setBoxSize] = useState({});

  const pTag = useRef();

  useLayoutEffect(() => {
    let size = pTag.current.getBoundingClientRect();
    setBoxSize(size);
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p className="mb-3" ref={pTag}>
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-primary mr-3" onClick={() => decrement(1)}>
        anterior quote
      </button>

      <button className="btn btn-primary" onClick={() => increment(1)}>
        siguiente quote
      </button>

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
