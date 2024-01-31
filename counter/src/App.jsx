import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCount] = useState(0);

  const addValue = () => {
    // console.log("value added ", Math.floor(Math.random()*10+1))
    // counter = counter+1;
    if (counter < 10) {
      setCount(counter + 1);
    }
  };

  const removeValue = () => {
    // console.log("value added ", Math.floor(Math.random()*10+1))
    if (counter > 0) {
      setCount(counter - 1);
    }
  };

  return (
    <>
      <h1>React || JavaScript</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Increasse Value</button> &nbsp;&nbsp;&nbsp;
      <button onClick={removeValue}>Decrease Value</button>
    </>
  );
}

export default App;
