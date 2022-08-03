import React, { useRef } from "react";
import "../02-useEfect/effects.css";

export const FocusScreen = () => {
  const inutRef = useRef();

  const hadleClick = () => inutRef.current.select();
  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />

      <input className="form-control" placeholder="su nombre" ref={inutRef} />

      <button className="btn btn-primary mt-5" onClick={hadleClick}>
        Focus
      </button>
    </div>
  );
};
