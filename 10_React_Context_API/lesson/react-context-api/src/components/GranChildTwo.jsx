import React, { useContext } from 'react'
import { MyContext } from '../App'

export default function GranChildTwo() {
    const state = useContext(MyContext)
  return (
    <div>GranChildTwo : <button onClick={()=>state.setCounter(state.counter+1)} >increment</button></div>
  )
}
