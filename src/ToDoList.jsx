import React, { useState } from "react";
import ToDoList2 from "./ToDoList2";

const ToDoList = () => {
  const [inputList, setInputList] = useState("buy Apple"); // "" = NULL
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItems = () => {
    setItems((oldItems) => {
      //oldItems access the objects or array
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrCurrentElement, index) => {
        return index !== id; //jodi deleted ele match kore jay then ele take delete kore new array return kore deve, ar match na korle whole array take abr return kore debe
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a items"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listofItems}>+</button>

          <ol>
            {/* <li>{inputList}</li> */}
            {items.map((itemval, index) => {
              return (
                <ToDoList2
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
