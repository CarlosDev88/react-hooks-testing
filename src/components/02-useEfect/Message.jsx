import React, { useEffect, useState } from "react";

export const Message = () => {
  const [cords, setCords] = useState({ x: 0, y: 0 });
  const { x, y } = cords;
  useEffect(() => {
    const mouseMove = (e) => {
      const cords = { x: e.x, y: e.y };
      setCords(cords);
      console.log(cords);
    };

    window.addEventListener("mouseover", mouseMove);

    return () => {
      window.removeEventListener("mouseover", mouseMove);
    };
  }, []);

  return (
    <div>
      <p>
        ( x:{x} , y:{y})
      </p>
    </div>
  );
};
