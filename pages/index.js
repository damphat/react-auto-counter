import { useEffect, useState } from "react";

// ## Requirements:
// - [x] show a continously increasing number
// - [x] MUST use setInterval() instead of setTimeout()
// ## Issues:
// - [ ] setInterval() is called every render

export default function AutoCounterPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(">> setInterval");
    const id = setInterval(() => {
      console.log(">> setCount");
      setCount(count + 1);
    }, 1000);
    return () => {
      console.log(">> clearInterval");
      clearInterval(id);
    };
  }, [count]);

  return <div>{count}</div>;
}
