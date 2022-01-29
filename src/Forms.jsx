import React, {useState} from 'react';

const Forms = ()=>{
    const [state, setState] = useState("");
    const [fullName, setFullName] = useState("");

    const InputEvent = (event)=>{
        // console.log(event.target.value);
        setState(event.target.value); // by this event.target.value we get the value whatever we write in form
    }

    const submit = ()=>{
        setFullName(state);
    }
    return(
        <>
        <div>
            {/* <h1> Hello {state} </h1> */}
            <h1> Hello {fullName} </h1>
            <input type="text" placeholder='Enter Your Name' onChange={InputEvent} /> <br /> <br />
            <button onClick={submit}>Click me 🤭 </button>
        </div>

        </>
    );
}

export default Forms;