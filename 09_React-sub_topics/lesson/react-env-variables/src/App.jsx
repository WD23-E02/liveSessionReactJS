
import { useEffect,useRef, useState } from 'react'
import './App.css'
import hd from "./assets/hd.avif"
import Child from './components/Child'

function App() {
  console.log("render .....")

  const inputRef = useRef() /* just like id in DOM Manipulation */

  //create timer ref
/*   const timeRef= useRef()


  useEffect(()=>{
    timeRef.current = setInterval(()=>{

    },1000)

    return ()=>{
      clearInterval(timeRef.current)
    }
  },[])


  function clearTimer(){
    clearInterval(timeRef.current)
    // timer is undefined
  } */


  /* const [inputValue,setInputValue] = useState("") */

 /*  useEffect(()=>{
    fetch(import.meta.env.VITE_URL)
    .then(res=>res.json())
    .then(data=>console.log(data))
  },[]) */

  return (
    <>
     {/* <h1>Env (Environment Variables in React Vite )</h1> */}
     {/* <h2>{import.meta.env.VITE_API_KEY}</h2> */} {/* vite project use import.meta.env to get envs */}
    {/*  <h2>{process.env.REACT_APP_API_KEY}</h2> */} {/* create-react-app use process.env to get envs */}
    {/*  <h3>{import.meta.env.VITE_SECRET_PASSWORD}</h3> */}

 {/*    <h1>Display Images In React</h1>
    <img src="https://img.freepik.com/fotos-kostenlos/fallendes-herbstblatt-enthuellt-komplizierte-von-ki-erzeugte-blattadern_188544-9869.jpg" alt="" />
    <img src={hd} alt="" />
    <img src="/images/vite.svg" alt="" />

    <Child/> */}

{/* //unconrolled component / controlled component */}
    <input type="text" ref={inputRef} /* onChange={(e)=>setInputValue(e.target.value)} */ />

    <button onClick={()=>console.log(inputRef.current.value)}>print input value</button>


    </>
  )
}

export default App
