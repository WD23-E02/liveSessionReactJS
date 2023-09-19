import React, { useState,forwardRef, useImperativeHandle } from 'react'

 function Child(_,ref) {


    const [count,setCount]=useState(0)

    useImperativeHandle(ref, ()=>{
        return {
            incrementCounter(){
                setCount(prev=>prev+1)
            },
            printName(){
                console.log("I am Naqvi")
            }

        }
    })


  return (
    <div>
        <h3>Child Component 
        </h3>
        <h2>Counter : {count}</h2>
       
    </div>
  )
}
export default forwardRef(Child)