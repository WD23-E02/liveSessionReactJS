import {BrowserRouter, NavLink, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products"
import Product from "./components/Product"

function App() {
  return ( 
    <BrowserRouter>
    <div> 
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>

    <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/products" element={<Products/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/products/:id" element={<Product/>} />

    </Routes>



      </div>
    </BrowserRouter>
  )
}

export default App
