import { useRef } from 'react'
import './App.css'
import Child from './Child'

function App() {
 
  const ChildRef= useRef()


  return (
    <>
      <button onClick={()=>ChildRef.current.incrementCounter()}>increment</button>
      <Child ref={ChildRef}/>
      <button onClick={()=>ChildRef.current.printName()}>print my Name</button>
    </>
  )
}

export default App
