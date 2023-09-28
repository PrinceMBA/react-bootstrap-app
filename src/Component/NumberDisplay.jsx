import React from "react";

function NumberDisplay({ number }) {
  return (
    <div>
      <h1 style={{ fontSize: "250px", float: "right", marginRight: "400px" }}>
        {number}
      </h1>
    </div>
  );
}

export default NumberDisplay;
