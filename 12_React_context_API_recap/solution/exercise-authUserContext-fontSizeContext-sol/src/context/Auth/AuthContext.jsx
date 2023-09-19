import {useState, useEffect} from "react";
import {AuthContext} from "./context";

const AuthProvider = ({children}) => {
  // if you have data on the localStorage then you can use them as your state otherwise your state will be null
  let initialState = JSON.parse(localStorage.getItem("login")) || null;
  const [user, setUser] = useState(initialState);
  const login = (data) => {
    setUser(data);
  };

  //useEffect that watches for changes in the user state
  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{user, login}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
