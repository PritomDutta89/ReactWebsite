import React, {useState} from "react";
import { questions } from "./api";
import "./accordian.css";


const Accordion = () => {
    const [data, setData] = useState(questions);
  return (
      <>
          {
              data.map((value)=>{
                  return value.id;

              })
          }
      </>

  );
};

export default Accordion;