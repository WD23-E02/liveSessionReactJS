import React, { useContext } from 'react'
import { MyContext } from '../context/reactContext'
/* import Button from './Button' */

export default function Y() {
    const {y,setX}=useContext(MyContext)
  return (
    <div style={{border:"2px solid white"}}>
        <h1>Y: {y} </h1>
        <button onClick={()=>setX(x=>x+1)}>Increment X</button>
      {/*   <Button color="success">I am inside Y component</Button> */}
    </div>
  )
}
