import React from "react";
import { Actor } from "./Actor";
import Singers from "./Singers";
import { Todo } from "./Todo";
import "./App.css";
import { Book } from "./Book";
import { Counter } from "./Counter";

function App() {
  const actors = ["Sakib", "Raj", "Jas", "Alex"];

  const singers = [
    { name: "SREA", age: 67 },
    { name: "Arijit", age: 45 },
    { name: "Ed Sheeran", age: 56 },
    { name: "Pritom", age: 29 },
  ];
  
  const books = [
    { name: "Physics", price: 67 },
    { name: "Biology", price: 56 },
    { name: "chemistry", price: 56 },
    { name: "Science", price: 29 },
  ];

  return (
  
    <div className="App">
      <h1>🎵 Vite + React App</h1>
  <Book books={books}/>
      <Person />

      <h2>Singers</h2>
      {singers.map((singer, index) => (
        <Singers key={index} singer={singer} />
      ))}

      <h2>Todo List</h2>
      <Todo task="Learn React" isDone={true} />
      <Todo task="Core Concepts" isDone={false} />
      <Todo task="Try JSX" isDone={false} />

      <h2>Actors</h2>
      <Actor name="Raz" />
      {actors.map((actor, index) => (
        <Actor key={index} name={actor} />
      ))}

      <Counter/>
    </div>
  );
}

function Person() {
  return <h3>I am a person</h3>;
}

export default App;
