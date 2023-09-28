import React, { useState } from "react";
import NumberDisplay from "./NumberDisplay";
import ButtonPanel from "./ButtonPanel";

function Counter() {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <NumberDisplay number={number} />
      <ButtonPanel
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

export default Counter;
