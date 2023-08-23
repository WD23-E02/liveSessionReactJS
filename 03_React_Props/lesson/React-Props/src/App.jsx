import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import Test from "./components/Test";

function App() {
  const userName = "Aaron";
  //  Props (short for "properties") in React are a way to pass information or data from one component to another.
  return (
    <>
      {/*  we use className to add class style to our html-like  */}
      <div className="para">hello</div>

      <Heading user={userName} />

      <Navbar theme="Light" date="2023" />

      {/* <Test para={userName} hello="javascript" name="Hiba" /> */}
    </>
  );
}

export default App;
