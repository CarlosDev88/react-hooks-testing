import React from "react";

export const ShowIncrement = ({ increment }) => {
  console.log("se volvio a generar el componente");
  return (
    <>
      <button className="btn btn-primary" onClick={() => increment(2)}>
        Incrementar
      </button>
    </>
  );
};
