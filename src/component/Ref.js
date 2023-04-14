import React, { useEffect, useRef, useState } from "react";

export default function Ref() {
  const [timer, setTimer] = useState(0);
  const inRef = useRef();
  useEffect(() => {
    inRef.current = setInterval(() => {
      setTimer((tim) => tim + 1);
    }, 1000);
    return () => {
      clearInterval(inRef.current);
    };
  }, []);
  return (
    <div>
      {timer}
      <button onClick={() => clearInterval(inRef.current)}>Stop Timer</button>
    </div>
  );
}
