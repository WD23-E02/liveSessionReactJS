import Button from "./Button";
export default function Navbar(props) {
  console.log(props);
  return (
    <nav>
      <Button option={props.theme} />

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>{props.theme}</li>
        <li> The Year is {props.date}</li>
      </ul>
    </nav>
  );
}
