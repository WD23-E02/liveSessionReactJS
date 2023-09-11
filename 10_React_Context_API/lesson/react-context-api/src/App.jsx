import { useState, createContext } from 'react'
import './App.css'
import ChildOne from './components/ChildOne'
import ChildTwo from './components/ChildTwo'

// context API
// state management system

//Redux
//Zustand
//ReactQuery

//creating context
export const MyContext=createContext()


//wrap our whole application with context

function App() {
const [counter,setCounter]=useState(5)

  return (
    /* providng state/data to our context */
    <MyContext.Provider value={ { counter, setCounter } }>
        <h1>React Context API</h1>
        <ChildOne />
        <ChildTwo  />
    </MyContext.Provider>
  )
}

export default App
