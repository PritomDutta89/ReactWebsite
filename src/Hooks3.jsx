import React, { useState } from "react";

const Hooks3 = () => {
  let d = new Date().toLocaleTimeString();
  const [Time, setTime] = useState(d);

  const updateTime = () => {
    d = new Date().toLocaleTimeString(); //again write in function component
    setTime(d);
  };

  setInterval(updateTime, 1000);
  return (
    <>
      <h1>{Time}</h1>
    </>
  );
};

export default Hooks3;
