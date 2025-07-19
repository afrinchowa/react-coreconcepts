import React from "react";

export const Home = () => {
  function handleClick() {
    alert("button Clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
