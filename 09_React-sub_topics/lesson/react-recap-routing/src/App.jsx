import './App.css'
import Home from './components/Home'
import SingleUser from './components/SingleUser'
import Users from './components/Users'
import {BrowserRouter,Link, Routes, Route} from "react-router-dom"

function App() {


  return (
    <BrowserRouter>
     <h1>Recap React Routing</h1>
     <ul>
      <li><Link to="/"> Home</Link></li>
      <li><Link to="/users"> Users </Link></li>
     </ul>

  <Routes>
          <Route path="/" element={ <Home/>} />
         {/*  <Route path="/users"  element={  <Users/>}/> */}

         {/*  <Route path="/users/:name" element={<SingleUser/>}/> */} {/* //dynamic routing */}
      
{/* nested routing */}
      <Route path="/users"  element={  <Users/>}>
          {/*  <Route index element={<h2>please click any user to see more Info!</h2>} /> */}
           <Route path=":name" element={<SingleUser/>}>
         
           </Route>
      </Route>
  </Routes>    
   
  


    </BrowserRouter>
  )
}

export default App
