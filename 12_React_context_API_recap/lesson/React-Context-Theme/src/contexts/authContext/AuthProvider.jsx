import {AuthContext} from "./context";
import {useState} from "react";
function AuthProvider({children}) {
  const [user, setUser] = useState(null);

  function updateUser(data) {
    setUser(data);
  }

  return (
    <AuthContext.Provider value={{user, updateUser}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
