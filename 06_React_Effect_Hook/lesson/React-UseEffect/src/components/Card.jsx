import React from "react";

function Card({todo}) {
  console.log(todo);

  return (
    <div
      style={{
        background: "orange",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        border: "1px solid white",
      }}
    >
      <p>{todo.title}</p>
      <button style={{color: "red"}}>X</button>
    </div>
  );
}

export default Card;
