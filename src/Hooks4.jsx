import React, { useState } from "react";

const Hooks4 = () => {
  let c = "#8e44ad";
  const [state, setState] = useState(c);
  const bgcolo = () => {
    let p = "#983";
    setState(p);
  };

  const bgBack = ()=>{
      setState(c);  
  }
  return (
    <>
      <div style={{ backgroundColor: state }}>
        <button onClick={bgcolo} onDoubleClick={bgBack}>Click me</button>
      </div>
    </>
  );
};

export default Hooks4;
