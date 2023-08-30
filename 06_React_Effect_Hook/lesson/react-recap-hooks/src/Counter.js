import React,{useEffect, useState} from 'react'

export default function Counter() {
    const [count,setCount]= useState(0)

  
    useEffect(()=>{
        //only mounting phase 
        console.log("counter mounted")

       /*  return ()=>{
            //unmounting component
            console.log("counter component unmounted")
        } */
    },[])

    useEffect(()=>{
        //mounting phase
        //updating phase
        console.log("update counter")
    },[count])

  return (
    <div><h2>count : {count}</h2>
    <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}
