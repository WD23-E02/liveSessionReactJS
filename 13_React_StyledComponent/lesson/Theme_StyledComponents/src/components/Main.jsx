import React from "react";
import {styled} from "styled-components";

const Container = styled.div`
  width: 800px;

  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.color};
`;

function Main() {
  return (
    <Container>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        aliquid magnam optio perspiciatis consequuntur molestias sit odit, autem
        perferendis itaque id, nulla voluptatem dolor deserunt omnis veritatis
        quisquam numquam? Quo in autem laboriosam minus odio illo ad, aperiam
        alias omnis, ratione nemo, aliquam ab sed quam doloribus dolor
        perspiciatis at quia dolore delectus amet itaque harum nobis. Iusto
        porro, possimus beatae dolores corrupti similique hic tempore pariatur,
        at eaque quidem quo accusantium quas voluptates. Eius animi, corporis
        quisquam eos laudantium officia? Molestias molestiae quo nam atque
        aspernatur est voluptatum cumque, quam nostrum possimus enim vitae illo
        hic! Molestiae, veniam accusantium?
      </p>
    </Container>
  );
}

export default Main;
