import Navbar from "./components/Navbar/Navbar";

function App() {
  const user = "Lee";

  let theme = "light";

  function handleAlert() {
    alert("Hello there");
  }

  function handleTheme(param) {
    // This change won't re-render the component
    theme = param;

    console.log("hello");
  }

  function handleChange(e) {
    console.log(e.target.value);

    // console.log("you copied me");
  }

  function handleLastName(param, e) {
    console.log(e);

    console.log(param);
  }

  return (
    <>
      <Navbar user={user} />

      <button onClick={() => console.log("clicked")}>Click</button>
      {/* to handle the event , just pass the name of the function */}

      <button onClick={handleAlert}> Click again </button>

      {/* The arrow function returns the handleTheme, and when we click the button, this handleTheme is then called */}

      <button onClick={() => handleTheme("blue")}>change ThemeMode </button>
      {/* <h3 onCopy={handleChange}>hello there 2024</h3> */}
      <div>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="username"
        />
      </div>
      {/* onChange event passed the e (obj) to the main function (arrow function) , then the arrow function passed the e to the handler */}
      <div>
        <input
          placeholder="lastName"
          type="text"
          name="lastName"
          onChange={(e) => handleLastName("Leon", e)}
        />
      </div>
    </>
  );
}

export default App;

// document.querySelector("button").addEventListener("click", () => {});
