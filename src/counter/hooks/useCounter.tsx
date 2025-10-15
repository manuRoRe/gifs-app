import { useState } from "react";

export const useCounter = (initialValue: number = 5) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter((prevState) => prevState - 1);
  };

  const handleReset = () => {
    setCounter(5);
  };

  return {
    //Props
    counter,

    //Methods or actions
    handleAdd,
    handleSubtract,
    handleReset,
  };
};
