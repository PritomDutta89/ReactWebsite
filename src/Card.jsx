import React from "react";

const Card = (props) => {
    return (
      <>
        <div>
          <p>{props.sn} </p>
          <img src={props.ims} alt="" />
        </div>
      </>
    );
  }

  export default Card;