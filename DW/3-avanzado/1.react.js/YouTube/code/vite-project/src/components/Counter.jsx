import React, { useState } from "react";

const Counter = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleClick = () => {
    const n = counter + 1;

    setCounter(n);
    console.log(n);
  };

  return (
    <>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={handleClick}>
        This is a button
      </button>
    </>
  );
};

export { Counter };
/* rafc */


/* 1:33:04 */