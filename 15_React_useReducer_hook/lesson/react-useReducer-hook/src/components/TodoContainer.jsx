import React, { useContext, useState } from "react";
import { MyContext } from "../context/context";

export default function TodoContainer() {
  const { state, dispatch } = useContext(MyContext);

  /*   const addItem=(e)=>{
    e.preventDefault()

  }

  const deleteItem=(id)=>{
    console.log("clicked",id)
  }

  const updateItem=(id)=>{
    console.log("clicked",id)
  } */

  return (
    <div>
      <h2>TODO APP</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "additem", payload: e.target.task.value });
          e.target.reset();
        }}
      >
        <input type="text" name="task" />
        <button>add task</button>
      </form>
      <ul>
        {state.todoItems.map((item) => (
          <li
            key={item.id}
            style={{ backgroundColor: item.done ? "green" : "gray" }}
          >
            {" "}
            {item.text}{" "}
            <span
              onClick={() => dispatch({ type: "deleteitem", payload: item.id })}
            >
              {" "}
              ❌{" "}
            </span>
            <span
              onClick={() => dispatch({ type: "updateitem", payload: item.id })}
            >
              {" "}
              🗄{" "}
            </span>{" "}
            span
          </li>
        ))}
      </ul>
    </div>
  );
}
