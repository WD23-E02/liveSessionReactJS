import "./App.css";
import { useState } from "react";
import Counter from "./Counter";
// what is state
// immutable/changeable data in react

/* let numbers = [1,2]
const [a,b] =numbers  */

function App() {
  //destucturing array
 
  const [bgColor, setBgColor] = useState("aqua")// ["aqua",function]

/*   const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter - 1); */

  return (
    <>
     <Counter name="Naqvi" initialValue={10}/>
     <Counter name="John" initialValue={20}/>
     <Counter name="Rana" initialValue={5}/>
     <Counter name="Joseph" initialValue={50}/>
     <Counter name="Mike" initialValue={1}/>


{/* 
      <button onClick={()=>setBgColor("yellow")}>change heading background</button>
   
   <p style={{color:bgColor}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo provident, dicta, sit pariatur ducimus qui alias tempore aut porro quibusdam id vero laboriosam accusamus. Provident unde amet corporis veritatis minus natus minima, quasi animi aliquid commodi aut? Ut esse officia architecto quo id vitae reprehenderit ipsum debitis eligendi at sit, optio dignissimos nemo hic, facilis numquam expedita praesentium a omnis obcaecati, voluptate in? Fugit, quo aliquid repellendus rem enim laborum doloribus earum deserunt saepe delectus voluptatum odit alias porro nisi numquam vel obcaecati adipisci totam nihil doloremque cupiditate. Ea dignissimos facilis a maxime adipisci tempora accusamus, sint quas voluptas enim praesentium ex atque? Dignissimos at atque impedit, labore vel ipsa, voluptates facere sapiente adipisci cum deserunt, quos assumenda dolor natus tempore iure. Numquam, ullam laborum dicta similique eos deleniti impedit ipsum earum cum veniam iure sint expedita reiciendis cumque distinctio nihil mollitia ducimus itaque, nobis nostrum? Voluptatum itaque, natus molestias ullam officiis nulla reprehenderit, magnam ipsa, vel dolor earum consequatur nobis dolore architecto repellendus corrupti sed iure a animi officia. Illum temporibus laboriosam dolores officiis. Odio quis aspernatur voluptate asperiores facere architecto quibusdam dolor labore, voluptatum veritatis fuga natus, quod praesentium fugit, amet repellat voluptatem! Quaerat natus culpa quae?</p> */}
    </>
  );
}

export default App;
