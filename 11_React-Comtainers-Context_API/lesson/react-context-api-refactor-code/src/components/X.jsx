import React, {useContext} from "react";
import {MyContext} from "../context/reactContext";
/* import Button from './Button' */

export default function X() {
  const {x, setY} = useContext(MyContext);
  return (
    <div style={{border: "2px solid white"}}>
      <h1>X: {x} </h1>
      <button onClick={() => setY((y) => y + 1)}>Increment Y</button>
      {/*   <Button color="primary">I am inside X component</Button> */}
    </div>
  );
}
