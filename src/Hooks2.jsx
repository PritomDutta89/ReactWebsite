import React, { useState } from "react";

const Hooks2 = () => {
  let d = new Date().toLocaleTimeString();
  const [Time, setTime] = useState(d);

  const upDate = ()=>{
        d = new Date().toLocaleTimeString(); //again write in function component
        setTime(d); 

  }
  return (
    <>
      <h1>{Time}</h1>
      <button onClick={upDate}>Get Time</button>
    </>
  );
};

export default Hooks2;
