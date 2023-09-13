import React, {useContext} from "react";
import {ThemeContext} from "../contexts/themeContext/context";

function Main() {
  const {isDark} = useContext(ThemeContext);

  return (
    <div className="main">
      <div
        className="content"
        style={{backgroundColor: isDark ? "blue" : "white"}}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rem, est
          reprehenderit maiores in ipsam? Nostrum at dolorum quis commodi cumque
          quisquam sit! Aut esse sint dolorem? Labore ex provident iusto sequi
          modi aperiam eos reiciendis minus nihil necessitatibus. Assumenda!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rem, est
          reprehenderit maiores in ipsam? Nostrum at dolorum quis commodi cumque
          quisquam sit! Aut esse sint dolorem? Labore ex provident iusto sequi
          modi aperiam eos reiciendis minus nihil necessitatibus. Assumenda!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rem, est
          reprehenderit maiores in ipsam? Nostrum at dolorum quis commodi cumque
          quisquam sit! Aut esse sint dolorem? Labore ex provident iusto sequi
          modi aperiam eos reiciendis minus nihil necessitatibus. Assumenda!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rem, est
          reprehenderit maiores in ipsam? Nostrum at dolorum quis commodi cumque
          quisquam sit! Aut esse sint dolorem? Labore ex provident iusto sequi
          modi aperiam eos reiciendis minus nihil necessitatibus. Assumenda!
        </p>
      </div>
    </div>
  );
}

export default Main;
