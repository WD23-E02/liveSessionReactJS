import {useEffect, useState} from "react";

import "./App.css";
import Child from "./components/Child";
import Container from "./components/Container";

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(1);

  const [isLogin, setIsLogin] = useState(false);
  /* 

! lifeCycle in react:
every component has a life cycle
1- mounted : once the component is added to dom

2- Updated: when the component is updated(when a props or state change)

3- unMounted : when the component is removed from the dom

*/

  /* 

  ! in this case , fetch data will cause infinite loop, since it's keep updating the state
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setTodos(data)).catch(err=>console.log(err));

  /* 
The useEffect Hook lets you perform side effects in function components  
!When to use useEffect?
Mounted: When you want to do something right after the component is added to the DOM.
Updated: If you want to run some code whenever a certain prop or state changes.
Unmounted: Before the component is removed from the DOM, you might want to clean up any subscriptions or timers.



  /*
  syntax :
  useEffect(()=>{
   the code that we want to run

  }, []) // dependence array


  */
  // this useEffect will run right after the component is mounted
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);

        console.log("I'm run only once after the component is mounted");
      });
  }, []); // the empty dependencies array will tell the useEffect when to run the effect function

  // This useEffect runs after the component is mounted and every time count change (when the component is updated)

  useEffect(() => {
    document.title = `You click ${count} time`;
    console.log("I run every time the count change", count);
  }, [count]); // every time this count change , effect function will run

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/comments?postId=${count}`)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, [count]);
  return (
    <>
      <div>useEffect</div>

      <button onClick={() => setCount(count + 1)}>Add One </button>
      <div>{count}</div>

      {isLogin ? null : <Child isLogin={isLogin} setIsLogin={setIsLogin} />}

      <Container todos={todos} />
      {/* {todos.map((pro) => (
        <span>{pro.title}</span>
      ))} */}
    </>
  );
}

export default App;
