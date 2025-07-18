import { Actor } from "./actor";
import "./App.css";
import Singers from "./Singers";
import { Todo } from "./Todo";

function App() {
  const actors = ["sakib", "Raj", "Jas", "alex"];

  const singers = [
    { name: "SREA", age: 67 },
    { name: "Arijit", age: 45 },
    { name: "Ed Shareen", age: 56 },
    { name: "pritom", age: 29 },
  ];
  return (
    <>




    {
      singers.map((singer,index) =><Singers key={index} singer={singer}   />)
    }
      <h1>Vite + React</h1>
      <Person />
      <Todo task="learn react " isDone={true} />
      <Todo task="core concepts" isDone={false} />
      <Todo task="try JSX" isDone={false} />
      <Actor name={"Raz"} />
      {actors.map((actor) => (
        <Actor name={actor} />
      ))}
     
    </>

   
  );
}

function Person() {
  return <h3>I am a person</h3>;
}
export default App;
