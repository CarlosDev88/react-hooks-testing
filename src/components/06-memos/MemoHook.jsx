import React, { useMemo, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { prosesoPesado } from "../helpers/prosesoPesado";

import "../styles/style.css";

export const MemoHook = () => {
  const [show, setShow] = useState(true);
  const { counter, increment } = useCounter(30);

  const memoProsesado = useMemo(() => prosesoPesado(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <h3>
        counter : <small>{counter}</small>
      </h3>
      <hr />

      <p>{memoProsesado}</p>

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
