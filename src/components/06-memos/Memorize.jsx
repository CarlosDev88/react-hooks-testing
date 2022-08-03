import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";

import "../styles/style.css";
import { Small } from "./Small";

export const Memorize = () => {
  const [show, setShow] = useState(true);
  const { counter, increment } = useCounter(10);

  return (
    <div>
      <h1>
        counter : <Small counter={counter} />
      </h1>
      <hr />

      <button onClick={() => increment(1)} className="btn btn-primary">
        +
      </button>

      <button
        onClick={() => setShow(!show)}
        className="btn btn-outline-primary ml-3"
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
