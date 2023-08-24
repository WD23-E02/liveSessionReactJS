import "./nav.css";
function Navbar({user}) {
  return (
    <nav className="navbar">
      <ul style={{backgroundColor: "purple"}}>
        <li>Home</li>
        <li>About</li>
        {/* inline style  in react */}
        <li
          style={{
            color: "red",
            border: "1px solid green",
            backgroundColor: "white",
          }}
        >
          {user}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

// document.body.style.color = "red"
