import MainContainer from "./MainContainer";
import Navbar from "./Navbar";

function App() {
  // write any javascript

  const username = "Leon";
  const tool = "Vite";

  const userList = ["Sarah", "John", "Tom"];

  const products = [
    {name: "Product-1", id: 1},
    {name: "Product-2", id: 2},
    {name: "Product-3", id: 3},
  ];

  let isLoggedIn = true;

  let themeMode = "Light";

  return (
    <>
      {/* if we need to include js variables , we have to wrap it with {} */}
      <h1>Hello world {tool}</h1>
      <h3> Welcome Back {username}</h3>
      <Navbar />

      <MainContainer />

      {userList.map((user, i) => (
        <div key={i}>
          <ul>
            <li>{user}</li>
          </ul>
        </div>
      ))}
      {/* To iterate over an array using "map," we wrap the content with curly braces "{}." */}

      {/* if we want to reference a javascript value, we need to wrap it with curly braces*/}
      {products.map((obj) => (
        <div key={obj.id}>{obj.name}</div>
      ))}

      <footer>This is the footer</footer>

      {/* Conditional rendering is commonly achieved using the ternary operator. */}

      {isLoggedIn ? <h2>Hello Leon</h2> : <h2>Hello there</h2>}

      {themeMode === "Dark" ? (
        <p>Now it's Dark mode</p>
      ) : (
        <p>Now it's light Mode</p>
      )}
    </>
  );
}

export default App;
