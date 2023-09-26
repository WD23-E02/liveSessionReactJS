import React, {useContext} from "react";
import {FontSizeContext} from "../context/FontSizeContext";
import {ThemeContext} from "../context/ThemeMode/context";

function Main() {
  const {fontSize, increaseFontSize, decreaseFontSize} =
    useContext(FontSizeContext);
  const {isDarkMode} = useContext(ThemeContext);
  return (
    <div className={`main ${isDarkMode && "bg"}`}>
      <div className="content">
        <button onClick={increaseFontSize}>Increase the font size</button>
        <button onClick={decreaseFontSize}>Decrease the font size</button>
        <p style={{fontSize: `${fontSize}px`}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
          repellendus alias explicabo, fugiat ut neque facere eius dignissimos
          obcaecati nisi! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Nulla repellendus alias explicabo, fugiat ut neque facere eius
          dignissimos obcaecati nisi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Nulla repellendus alias explicabo, fugiat ut neque
          facere eius dignissimos obcaecati nisi!
        </p>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
          repellendus alias explicabo, fugiat ut neque facere eius dignissimos
          obcaecati nisi! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Nulla repellendus alias explicabo, fugiat ut neque facere eius
          dignissimos obcaecati nisi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Nulla repellendus alias explicabo, fugiat ut neque
          facere eius dignissimos obcaecati nisi!
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
          repellendus alias explicabo, fugiat ut neque facere eius dignissimos
          obcaecati nisi! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Nulla repellendus alias explicabo, fugiat ut neque facere eius
          dignissimos obcaecati nisi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Nulla repellendus alias explicabo, fugiat ut neque
          facere eius dignissimos obcaecati nisi!
        </p>{" "}
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
          repellendus alias explicabo, fugiat ut neque facere eius dignissimos
          obcaecati nisi! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Nulla repellendus alias explicabo, fugiat ut neque facere eius
          dignissimos obcaecati nisi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Nulla repellendus alias explicabo, fugiat ut neque
          facere eius dignissimos obcaecati nisi!
        </p>
      </div>
    </div>
  );
}

export default Main;
