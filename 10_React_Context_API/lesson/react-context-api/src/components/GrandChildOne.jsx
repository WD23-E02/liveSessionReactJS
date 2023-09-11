import React,{useContext} from 'react'
import { MyContext } from '../App'


export default function GrandChildOne() {
   const { counter } =  useContext(MyContext)
  return (
    <div>GrandChildOne : counter = {counter}  </div>
  )
}
