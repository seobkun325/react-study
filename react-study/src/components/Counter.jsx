import { useState } from "react";

export default function Counter({ onTotal }) {
  const [counter, setCounter] = useState(0);

  console.log("[렌더링] counter : ", counter);

  const handleCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    console.log("[함수호출] counter : ", counter);

    if (onTotal) {
      onTotal();
    }
  };
  return <button onClick={handleCounter}>Counter : {counter}</button>;
}
