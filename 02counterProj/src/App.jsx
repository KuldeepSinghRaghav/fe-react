import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //1. **1st parameter is the value we set in useStatic is bydefault value of array[0], in our case it's counter.
  //2. **setCounter is a function or method that is responsible to update the counter variable.
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const deleteValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <h3>Count : {counter}</h3>
      <button onClick={addValue}>add value</button>
      <br />
      <br />
      <button onClick={deleteValue}>delete value</button>
      <br />
      <br />
      <p>click to change the value of count : {counter}</p>
    </>
  );
}

export default App;
