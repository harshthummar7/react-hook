import React, { useState, useMemo } from "react";

export default function Memo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  //   const isEven = () => {
  //     let i = 0;
  //     while (i < 2000000000) {
  //       i++;
  //     }
  //     return count1 % 2 === 0;
  //   };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <button type="button" onClick={() => setCount1(count1 + 1)}>
        Count1 - {count1}
      </button>
      <span> {isEven ? "Even" : "Odd"}</span>
      <br></br>
      <button type="button" onClick={() => setCount2(count2 + 1)}>
        Count2 - {count2}
      </button>
    </div>
  );
}
