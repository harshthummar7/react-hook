import React, { useCallback, useState } from "react";
import Tittle from "./Tittle";
import Count from "./Count";
import Button from "./Button";

export default function Callback() {
  const [age, setAge] = useState(21);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Tittle />
      <Count text="age" count={age}></Count>
      <Button handleClick={incrementAge}>IncrementAge</Button>
      <Count text="salary" count={salary}></Count>
      <Button handleClick={incrementSalary}>IncrementSalary</Button>
    </div>
  );
}
