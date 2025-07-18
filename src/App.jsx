import "./App.css";
import { Todo } from "./Todo";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person />
      <Todo task="learn react " isDone={true} />
      <Todo task="core concepts" isDone={false} />
      <Todo task="try JSX" isDone={false} />
    </>
  );
}

function Person() {
  return <h3>I am a person</h3>;
}
export default App;
