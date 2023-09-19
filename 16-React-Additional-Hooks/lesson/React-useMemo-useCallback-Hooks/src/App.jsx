
import { useCallback, useMemo, useState } from 'react'
import './App.css'
import Child from './Child'


function computeHeavyTask(){
  for(let i=0;i<1000000000; i++){}
  console.log("performing heavy task...")
  return 234
}


function App() {

  const [count,setCount]= useState(0)
  const [name,setName]=useState("Naqvi")

  const changeUserName=(name)=>{
    setName(name)
  }

  //memorizing function/callback
  const memorizedCallback = useCallback(changeUserName, [name])

//memorizing value
const memorizedValue=useMemo(computeHeavyTask,[])  

  console.log("app component render ....")
  return (
    <>
     <h1>useMemo and useCallback Hook</h1>
     <h2>Heavy Computational Value: {memorizedValue}</h2>
     <Child name={name} changeUserName={memorizedCallback}/>
     <h2>Counter Value: {count}</h2>
     <button onClick={()=>setCount(count+1)}>increment</button>
    </>
  )
}

export default App
