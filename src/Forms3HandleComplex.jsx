import React, { useState } from "react";

const Forms3HandleComplex = () => {
  const [fullNmae, setFullNmae] = useState({
    fname: "",
    lname: "",
  });

  const InputEvent = (event) => {
    console.log(event.target.value);

    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setFullNmae((p) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: p.lname,
        };
      }
      else if (name === "lname") {  
        return {
          fname: p.fname,
          lname: value,
        };
      }
    });
  };

  const submit = (e) => {
    console.log(e.preventDefault()); //to prevent the refresh page
    alert("form submitted");
  };
  return (
    <>
      <div>
        <form onSubmit={submit}>
          <h1>
            {" "}
            Hello {fullNmae.fname} {fullNmae.lname}
          </h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="fname"
            onChange={InputEvent}
            value={fullNmae.fname}
          />
          <br /> <br />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            name="lname"
            onChange={InputEvent}
            value={fullNmae.lname}
          />{" "}
          <br /> <br />
          <button type="submit">Click me 🤭 </button>
        </form>
      </div>
    </>
  );
};

export default Forms3HandleComplex;
