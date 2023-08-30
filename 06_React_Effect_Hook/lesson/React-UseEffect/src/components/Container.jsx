import React from "react";
import Card from "./Card";

function Container(props) {
  return (
    <>
      {props.todos.map((todo) => (
        <Card todo={todo} />
      ))}
    </>
  );
}

export default Container;
