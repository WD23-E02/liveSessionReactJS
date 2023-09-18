import React, { useContext } from 'react'
import { MyContext } from '../context/context'

export default function Counter() {
   const {state,dispatch} = useContext(MyContext)
   /*  whenever there is a change/update in state or props react will rerender that component */

   /*  const incrementCounter=()=>{
        setCount(count+1)
    }
    const decrementCounter=()=>{
        setCount(count-1)
    }
    const resetCounter=()=>{
        setCount(0)
    } */

    //dispatching action to reducer:
    // action is a object with type and payload?
  return (
    <div>
  <h2>Counter: {state.count}</h2>
  <button onClick={()=>dispatch({type:"increment"})}>increment</button>
  <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
  <button onClick={()=>dispatch({type:"reset"})}>reset</button>
</div>
  )
}
