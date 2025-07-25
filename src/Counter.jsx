import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleCountMinus = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div className="2px solid red">
      <h1>Counter:{count}</h1>

      <button onClick={handleCount}>Add</button>
      <button onClick={handleCountMinus}>Minus</button>
    </div>
  );
};

