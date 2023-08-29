
import React,{useEffect, useState} from 'react';

function App() {

 /*   const [name, setName] = useState("Naqvi") // ["Naqvi",function]

  const changeName=()=>{
    setName("John")
  } */
 
/*   const [country,setCountry] = useState("Germany") */


/* const [color,setColor] = useState("red")
const [inputValue,setInput]= useState("")

 
function newColor(){
  setColor(inputValue)
} */

const [time,setTime] = useState(new Date().toUTCString())

useEffect(()=>{
  setInterval(()=>{
    setTime(new Date().toUTCString())
  },1000)
},[])

  return (
    <div className="App">
     {/*  <h1>Hi {name}</h1>
      <button onClick={changeName}>change name</button> */}
{/* 
      Select Your Country : 
      <select onChange={e=>{
        setCountry(e.target.value)
      
      }}>
        <option value="Germany">germany</option>
        <option value="France">France</option>
        <option value="United State">United State</option>
      </select>
      <h1>Country: {country}</h1> */}
{/*       <input type="text" onChange={(e)=>setInput(e.target.value)} />
      <button onClick={newColor}>apply background color</button>
      <div style={{width:"300px",height:"300px",border:"2px solid",backgroundColor:color}}></div> */}


      <h1>{time}</h1>
    </div>
  );
}

export default App;