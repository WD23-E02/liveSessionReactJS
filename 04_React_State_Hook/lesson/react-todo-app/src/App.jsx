
import { useState } from 'react'
import './App.css'
import Header from './Header'

function App() {
  const [theme,setTheme] = useState(true)
/*   console.log("render ....") */

//todo tasks array state
const [tasks,setTasks] = useState([])



// add task function
const addTask=(e)=>{
  e.preventDefault()

  let task = {id:new Date().getTime() ,text:e.target.task.value,done:false }
  setTasks([task , ...tasks ])
  e.target.reset()
}

//delete todo task
const deleteItem=(id,e)=>{
  //stop bubble event
  // stop propagation
  e.stopPropagation()
  console.log(id)
  const updatedTasks = tasks.filter(task=>task.id!==id)
  setTasks(updatedTasks)
}

//update status of todo task
const updateStatus=(id)=>{
  console.log(id)
  const updatedTasks = tasks.map(task=>{
    if(task.id===id){
      task.done = !task.done
    }
    return task;
  })
  setTasks(updatedTasks)
}
console.log(tasks)
  return (
    <div style={{backgroundColor:theme?"gray":"white",height:"100vh"}}>
      <Header theme={theme} setTheme={setTheme}/>

    <form onSubmit={addTask}>
      <input type="text" name="task" />
      <button>add task</button>
    </form>


    <ul>
     {tasks.map(task=>(
       <li onClick={()=>updateStatus(task.id)} style={{border:`2px solid ${theme?'white':'black'}` ,backgroundColor:task.done?'yellowgreen':'gray'}} key={task.id}>{task.text} <button onClick={(e)=>deleteItem(task.id,e)}>X</button></li>
     ))}
    </ul>
    </div>
  )
}

export default App