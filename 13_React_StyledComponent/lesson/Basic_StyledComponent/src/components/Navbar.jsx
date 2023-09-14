import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  background-color: black;
  color: white;
`;
const Title = styled.h3`
  color: white;
  font-size: 40px;
`;

function Navbar() {
  return (
    <div>
      <Nav>
        <Title>The navbar</Title>
        <ul>
          <li>Home</li>
          <li>about</li>

          <li>Contact</li>
        </ul>
      </Nav>
    </div>
  );
}

export default Navbar;
