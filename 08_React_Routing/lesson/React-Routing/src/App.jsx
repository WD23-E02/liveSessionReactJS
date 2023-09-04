import './App.css' 
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";
import NotFound from './components/NotFound';
import User from "./components/User"

import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink  to="/about">About</NavLink>
        </li>
        <li>
          <NavLink   to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink  to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink  to="/contactus">Contact Us</NavLink>
        </li>
      </ul>
      

      <Routes> {/* just like a switch ,  */}
        <Route path="/" element={<Home />} /> {/* each case switch */}
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />

        <Route path="/products" element={<Products />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element= {<NotFound/> }   /> {/*  default case*/}
      </Routes>

  
    </BrowserRouter>
  );
}



export default App;


