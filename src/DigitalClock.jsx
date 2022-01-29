import React from "react";
import Clock from 'react-digital-clock';
// import ReactDOM from 'react-dom';
// import Countdown from 'react-countdown';

// ReactDOM.render(
//   <Countdown date={Date.now() + 10000} />,
//   document.getElementById('root')
// );


const DigitalClock = () => {
  return (
    <div style={{backgroundColor : "black"}}>
        <Clock />
    </div>
  );
};

export default DigitalClock;
