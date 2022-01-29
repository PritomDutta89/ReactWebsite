import React, { useState } from "react";
import ToDoListNew2 from "./ToDoListNew2";
import Button from "@mui/material/Button";
import AddIcon from "@material-ui/icons/Add";

const ToDoListNew = () => {
  const [item, setItem] = useState("apple");
  const [newitem, setNewitem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listOfItems = (event)=>{
    setNewitem( (previousValue)=>{
        return [...previousValue, item];

    } );

    setItem(" ");

  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="add an items" onChange={itemEvent} value={item} />
          <Button className="newBtn" onClick={listOfItems} >
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newitem.map((value, index) => {
              return <ToDoListNew2 key={index} text={value}/>;
            })}
          </ol>

          <br />
        </div>
      </div>
    </>
  );
};

export default ToDoListNew;
