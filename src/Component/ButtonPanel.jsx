import React from "react";

function ButtonPanel({ onIncrement, onDecrement }) {
  return (
    <div>
      <button
        style={{
          height: "150px",
          width: "400px",
          margin: "50px 0px 20px 300px ",
        }}
        onClick={onIncrement}
      >
        <h1>Increase</h1>
      </button>
      <br />
      <button
        style={{
          height: "150px",
          width: "400px",
          margin: "0px 0px 0px 300px ",
        }}
        onClick={onDecrement}
      >
        <h1>Decrease</h1>
      </button>
    </div>
  );
}

export default ButtonPanel;
