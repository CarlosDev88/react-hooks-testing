import React, { useState } from "react";
import "../02-useEfect/effects.css";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />

      {show && <MultipleCustomHooks />}

      <button onClick={() => setShow(!show)} className="btn btn-primary">
        Show/Hide
      </button>
    </div>
  );
};
