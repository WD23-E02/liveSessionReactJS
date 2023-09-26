import {createContext, useState} from "react";

export const FontSizeContext = createContext();

export default function FontSizeProvider({children}) {
  const [fontSize, setFont] = useState(16);

  const increaseFontSize = () => {
    setFont((preFont) => preFont + 2);
  };
  const decreaseFontSize = () => {
    setFont((preFont) => Math.max(12, preFont - 2)); // minimum font size is 12
  };
  return (
    <FontSizeContext.Provider
      value={{fontSize, increaseFontSize, decreaseFontSize}}
    >
      {children}
    </FontSizeContext.Provider>
  );
}
