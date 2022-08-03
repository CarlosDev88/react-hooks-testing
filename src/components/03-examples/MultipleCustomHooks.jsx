import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
// import "../02-useEfect/effects.css";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, loading, error } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = data !== null && data[0];

  return (
    <div>
      <h1>Breakingbad Quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-3">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

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
