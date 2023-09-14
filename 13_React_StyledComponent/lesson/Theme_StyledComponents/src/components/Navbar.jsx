import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.color};
  padding: 10px 20px;
`;
const H1 = styled.h1`
  color: white;
  // we can use dynamic properties through props
  margin: ${({mg}) => mg};
`;

// const Div = styled.div`
//   background-color: green;
//   color: white;
// `;
// const Div2 = styled(Div)`
//   background-color: #80006b;
// `;

function Navbar() {
  return (
    <div>
      <Nav>
        <H1 mg="20px">The Logo</H1>
      </Nav>

      {/* <Div>hello</Div>
      <Div>There</Div>

      <Div2>Another Div</Div2> 
      */}
    </div>
  );
}

export default Navbar;
