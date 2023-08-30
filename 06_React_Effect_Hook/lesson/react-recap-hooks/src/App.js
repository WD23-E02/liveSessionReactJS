/* 
import React, { useState } from 'react';

function App() {

  console.log("render ... app component")

  const [count,setCount] = useState(0) //returning [initialValue,function ]  //reactive value
  const [color,setColor]= useState("yellow")

  const incrementCount=()=>{
    setCount(count+1) // inform virtual dom about the changes
  }
  return (
    <div className="App">
      <h1 style={{backgroundColor:color}} onClick={()=>setColor("blue")}>Counter</h1>
      <h1>{count}</h1>
      <button onClick={incrementCount}>increment</button>
    </div>
  );
}

export default App; */
/* 
import { useEffect,useState } from "react";
import Counter from "./Counter";


export default function App(){
  //life cycle phase of each component
  // 1. mounting phase ...loading phase
  // 2. updating phase ... change in state and props
  // 3. unmounting phase ... removed from DOM

  //side effect example
  // https request 
  // setInterval 
  // localstorage

  const [showCounter,setShowCounter]=useState(true)


  useEffect(()=>{
    //mounting phase 
    console.log("app mounted ...")
  },[])

  useEffect(()=>{
    //update phase of app
    console.log("app update")
  },[showCounter])

  return (
    <div>
      <h1>useEffect</h1>
      { showCounter && <Counter/> }
      <button onClick={()=>setShowCounter(!showCounter)}>hide/show</button>
    </div>
  )
} */

import { useState } from "react";
import Timer from "./Timer";

export default function App() {
  const [showTimer,setShowTimer]=useState(true)
  return <div>
   {showTimer &&  <Timer/>}
   <button onClick={()=>setShowTimer(!showTimer)}>show/hide</button>
  </div>;
}
