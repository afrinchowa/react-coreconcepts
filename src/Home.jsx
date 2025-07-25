import React from "react";
import { Counter } from "./Counter";
export const Home = () => {
  function handleClick() {
    alert("button Clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
   
   <Counter/>
    </div>
  );
};
