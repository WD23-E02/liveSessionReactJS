import React, { useContext } from 'react'
import { MyContext } from '../context/context'

export default function Header() {
   const {state} =useContext(MyContext)
  return (
    <ul>
      <div>LOGO</div>
      <div>Items <sup>{state.todoItems.length}</sup> </div>
     </ul>
  )
}
