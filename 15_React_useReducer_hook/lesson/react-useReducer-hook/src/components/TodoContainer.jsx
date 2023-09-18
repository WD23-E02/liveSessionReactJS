import React, { useContext, useState } from 'react'
import { MyContext } from '../context/context'

export default function TodoContainer() {
  

  const {state,dispatch} = useContext(MyContext)

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
    <form /* onSubmit={addItem} */>
      <input type="text" name="task" />
      <button>add task</button>
    </form>
    <ul>
      {state.todoItems.map(item=>(<li key={item.id}> {item.text} <span /* onClick={()=>deleteItem(item.id)} */> ❌  </span><span /* onClick={()=>updateItem(item.id)} */> 🗄   </span> span
      </li>))}
   
    </ul>
  </div>
  )
}
