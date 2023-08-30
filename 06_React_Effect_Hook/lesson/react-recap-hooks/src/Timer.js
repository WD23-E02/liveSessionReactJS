import React,{useEffect, useState} from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date().toTimeString())

useEffect(()=>{
    //mounting phase 
   let asynTask = setInterval(()=>{
    setTime(new Date().toTimeString())
    console.log("setInterval is running .....")
   },1000)

   //unmounting phase
   return ()=>{
    //clean up code to clear our setInterval
    clearInterval(asynTask)
    
    
   /*  const a = window.confirm("do you really want to hide timer ? ")
    if(a){  
        window.alert("Thanks for visiting our web page!")
    }else{
        window.alert("Thanks")
    } */
   }


},[])


  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}
