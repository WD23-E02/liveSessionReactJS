
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const headingRef= useRef()
  const [city,setCity]=useState("Berlin")
  useEffect(()=>{
    console.log("useEffect")
    // fetch user location
    //get city 
    setCity("Frankfurt")
  },[])

/* useLayoutEffect(()=>{
  console.log("useLayouteffect")
   headingRef.current.style.top="0"
},[]) */

  return (
    <>
     <h1 ref={headingRef} style={{position:"relative",top:"-200px"}}>useLayoutEffect Hook</h1>
     <h2>user city: {city}</h2>
    </>
  )
}

export default App
