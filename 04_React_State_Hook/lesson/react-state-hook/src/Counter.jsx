import React,{useState} from 'react'

function Counter(props) {
    const [counter, setCounter] = useState(props.initialValue); // [0,function]
    return (
        <div>
             <h1 >{props.name}'s Counter</h1>
      <h3>{counter}</h3>
     {/*  <button onClick={incrementCounter}>increment</button>
      <button onClick={decrementCounter}>decrement</button> */}
       <button onClick={()=> setCounter(counter + 1)}>increment</button>
      <button onClick={() => setCounter(counter - 1)}>decrement</button>
        </div>
    )
}

export default Counter


