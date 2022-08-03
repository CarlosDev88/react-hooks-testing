import React, { useCallback, useState } from "react";
import "../styles/style.css";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num); //esto se usa para eliminar el warning de la funcion quitando la dependencia del counter
      //esto tambien se puede hacer con el useState
    },
    [setCounter]
  );

  return (
    <div>
      <h1>CallBackHook conunter: {counter}</h1>
      <ShowIncrement increment={increment} />
      <hr />
    </div>
  );
};
