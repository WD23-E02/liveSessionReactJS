import React, { useState } from "react";

// Components
import Fruit from "./components/Fruit";

// Styles
import "./App.css";

const initialState = ["Apple", "Mango", "Banana", "Lemon"];

function App() {
  const [fruits, setFruits] = useState(initialState);

  const handleRemoveFruit = (index) => {
    const newFruits = fruits.filter((item,i)=> i !== index );
    setFruits(newFruits);
  };

  return (
    <div className="App">
      <h1>Components 1</h1>
      {fruits.map((fruit, i) => (
        <Fruit key={i} type={fruit} deleteClickHandler={ () => handleRemoveFruit(i) } />
      ))}
    </div>
  );
}

export default App;
