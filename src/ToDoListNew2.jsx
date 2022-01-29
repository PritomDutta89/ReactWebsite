import React, {useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';


const ToDoListNew2 = (props) => {
    const [line, setLine] = useState(false);

    const cutIt = ()=>{
        setLine(true);
    }
  return (
   <>
   <div>
     <span onClick={cutIt} > <DeleteIcon className="deleteIcon" /> </span>
     <li style={{textDecoration: line ? "line-through" : "none"}} >{props.text}</li>

   </div>
       
   </>
  );
};

export default ToDoListNew2;