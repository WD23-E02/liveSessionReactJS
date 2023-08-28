
import { useState } from 'react'
import './App.css'

function App() {
  const [display,setDisplay] = useState(true)
  return (
    <>
    {/* {display ? <h1>Vite + React</h1> : null  */}

      { display && <h1>Vite + React</h1> } 
      <button onClick={()=>setDisplay(!display)}>{display?"hide":"show"}</button>

    </>
  )
}

/* !true = false
!false = true */
export default App