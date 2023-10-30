import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decrementCounter() {
    setCount(count - 1);
  }

  function incrementCounter() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="wrapper">
      <h3>Increment and Decrement</h3>
      <div className="container">
        <button onClick={decrementCounter}>-</button>
        <div>{count}</div>
        <button onClick={incrementCounter}>+</button>
      </div>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
