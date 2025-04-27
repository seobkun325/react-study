import Counter from "./Counter";
import { useState } from "react";
function Main() {
  const [total, setTotal] = useState(0);
  const handleTotal = () => {
    setTotal(total + 1);
  };
  return (
    <main>
      {total}
      <br />
      <br />
      <Counter onTotal={handleTotal} />
      <br />
      <br />
      <Counter onTotal={handleTotal} />
    </main>
  );
}

export default Main;
