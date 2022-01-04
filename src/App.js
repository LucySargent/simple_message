import React, {useState} from "react";
import "./App.css";


function App() {
  const [message, setMessage] = useState("JavaScript is cool...");
  const [counter, setCounter] = useState(0)
  const incrementCounter = () => setCounter(counter + 1)
  const decrementCounter = () => setCounter(counter - 1)
  
  function handleClick() {
    setMessage("and so is REACT!");
  }

  return (
    <div className="body">
      <h1>Simple React Things</h1>
      <div className="message">
        <h1>{message}</h1>
        <button className="messageButton" onClick={handleClick}>Update the message!</button>
      </div>
      <div>
        <h1>Counter</h1>
      </div>
      <div className="Counter">
        <h2>{counter}</h2>
        <div className="counterFunc">
        <button className="counterButton" onClick={decrementCounter}>-</button>
        <button className="counterButton" onClick={incrementCounter}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
