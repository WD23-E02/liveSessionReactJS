
// create context
// wrap our whole application inside context
// provide context with globalstate
// use context in any component

import './App.css'
import { Link, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import { createContext, useState } from 'react'


//creating context
export const MyContext = createContext()


function App() {
  const [user,setUser]= useState(null)
  const [posts,setPosts] = useState([])


  return (
    <MyContext.Provider value={{user,setUser,posts,setPosts}}>
    <h1>React Context API Example</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </MyContext.Provider>
  )
}

export default App
