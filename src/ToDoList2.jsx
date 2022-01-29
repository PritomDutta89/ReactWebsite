import React from "react";

const ToDoList2 = (props) => {
  return (
    <>
      <div className="todo_style">
        {/* <i class="fas fa-minus"></i> */}

        <li>
          <span onClick={()=>{
              props.onSelect(props.id); // props.id pass kora ho66 jate clisk korle value ta delete hoye jay. here we use callback function
          }}>👍</span>
          {props.text}
        </li>
      </div>
    </>
  );
};

export default ToDoList2;
