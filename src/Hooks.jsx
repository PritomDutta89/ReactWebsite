import React, {useState} from "react";

const Hooks = () => {
  const [count, setCount] = useState(100);
  const IncNum = () => {
    setCount(count-10);
    console.log("count");
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncNum}>Click me</button>
    </>
  );
};

export default Hooks;