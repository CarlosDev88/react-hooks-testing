import React, { memo } from "react";

export const Small = memo(({ counter }) => {
  return (
    <div>
      <small>{counter}</small>
    </div>
  );
});
