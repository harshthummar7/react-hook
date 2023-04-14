import React, { useState } from "react";

export default function Hello() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log(count); // 0

    setCount(count + 1); // Request a re-render with 1
    console.log(count); // Still 0!

    setTimeout(() => {
      console.log(count); // Also 0!
    }, 5000);
  }
  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}
