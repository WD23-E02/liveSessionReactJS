import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import {BtnBlue, BtnRed} from "./components/Buttons.styles";
import MainBootStrap from "./components/MainBootStrap";

const Title = styled.div`
  color: red;
  background-color: pink;

  width: 300px;
`;

const Container = styled.div`
  width: 800px;
  background-color: brown;
  height: 300px;
  color: white;
`;

// const BtnDanger = styled.button`
//   background: red;
//   color: white;
// `;
// const BtnInfo = styled(BtnDanger)`
//   background: blue;

//   &: hover {
//     background-color: yellow;
//   }
// `;

const Main = styled.div`
  background-color: ${(props) => props.bg};
  color: green;
  width: 300px;
  border: 1px solid white;
`;

const Logo = styled.h1`
  color: ${(props) => props.st.color};

  background-color: ${({st}) => st.bg};
`;

function App() {
  return (
    <>
      <Logo st={{color: "white", bg: "#14dbf5"}}>Welcome in to Styling</Logo>

      <Navbar />
      <Title>Hello there</Title>

      <Container>This my container</Container>

      {/* <BtnDanger>Delete</BtnDanger>

      <BtnInfo>More info</BtnInfo> */}
      <BtnBlue>More info</BtnBlue>

      <BtnRed>Delete</BtnRed>
      <Main bg="red">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          suscipit non earum iste reiciendis aliquid debitis assumenda nesciunt
          minus autem?
        </p>
      </Main>

      <MainBootStrap />
    </>
  );
}

export default App;
