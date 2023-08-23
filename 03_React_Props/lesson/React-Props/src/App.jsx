import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import Test from "./components/Test";

function App() {
  const userName = "Aaron";
  //  props is just an obj found in every component , we use it to pass data from parent to child , it has a key and a value
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
