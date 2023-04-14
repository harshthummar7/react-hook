import React, { useState, useEffect } from "react";

export default function Effect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("use effect called every time");
  });

  useEffect(() => {
    console.log("use effect called first time");
  }, []);

  useEffect(() => {
    console.log("use effect called initial loading and  count state update");
  }, [count]);

  return (
    <div>
      count is{count}
      <br></br>
      <button type="button" onClick={() => setCount(count + 1)}>
        Up Count
      </button>
    </div>
  );
}
