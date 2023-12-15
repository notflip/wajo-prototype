import { useState } from "react";

export default function App() {
  const [amt, setAmt] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function increaseAmt() {
    setAmt((a) => a + 1);
  }
  function increaseCount() {
    setCount((c) => c + amt);
  }

  return (
    <div>
      <button onClick={increaseCount}>Count + ({count})</button>
      <button onClick={increaseAmt}>Amt + ({amt})</button>
      {date.toDateString()}
    </div>
  );
}
