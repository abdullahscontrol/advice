
import { useEffect } from "react";
import { useState } from "react";
import "./App.css"

function App() {
  const [advice, setAdvive] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvive(data.slip.advice)
    setCount((c) => c + 1);
  }
  useEffect(function () {
    getAdvice();
  }, [])
  return (
    <div className="app">
      <h1 className="advice"> {advice}</h1>
      <button onClick={getAdvice} className="click">Get Advise</button>
      <p className="note-board">You have read <strong>{count}</strong> piece of advice </p>
    </div>
  )
}
export default App;