import { useState, useTransition } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data,setData]= useState([])
  const [isPending, startTransition] = useTransition()
console.log("render app component...")

  const incrementCounter=()=>{
    setCount(count+1) //high priority
    //second state
    // third state


    startTransition(()=>{
      //less priority
        const updatedData=[]
    for(let i= 0; i<15000; i++){
      updatedData.push(Math.random())
    }
    setData(updatedData)
    //fourth state
    //fifth state
    })
  
  }


  return (
    <>
     <h1>Count: {count}</h1>
     <button onClick={incrementCounter}>increment counter</button>
     <div>
      {isPending? <h1>Loading....</h1>: data.map(num=>(<p>{num}</p>))}
     </div>
    </>
  )
}

export default App
