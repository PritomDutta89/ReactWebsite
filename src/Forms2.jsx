import React, { useState } from "react";

const Forms2 = () => {
  const [state, setState] = useState("");
  const [fullName, setFullName] = useState("");
  const [lastState, setLastState] = useState("");
  const [lastName2, setLasName2] = useState("");

  const InputEvent = (event) => {
    // console.log(event.target.value);
    setState(event.target.value); // by this event.target.value we get the value whatever we write in form
  };

  const InputEvent2 = (event)=>{
    setLastState(event.target.value);
  }

  const submit = (e) => {
    console.log(e.preventDefault()); //to prevent the refresh page
    setFullName(state);
    setLasName2(lastState);
  };
  return (
    <>
      <div>
        <form onSubmit={submit}>
          <h1> Hello {fullName} {lastName2} </h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={InputEvent}
            value={state}
          />
          <br /> <br />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            onChange={InputEvent2}
            value={lastState}
          /> <br /> <br />
          <button type="submit">Click me 🤭 </button>
        </form>
      </div>
    </>
  );
};

export default Forms2;
