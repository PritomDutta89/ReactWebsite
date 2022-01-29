import React from "react";

const SlotM2 = (props)=>{
    // let x = props.em;
    // let y = props.en;
    // let z = props.ep;
    let {x,y,z} = props; // object dextructuring
    if( (x===y) && (y===z) )
    {
      return(
        <>
         This is mathching 
        </>
      );
    }
    else{
      return(
        <>
         This is not mathching    
        </>
      );
    }
  }

  export default SlotM2;