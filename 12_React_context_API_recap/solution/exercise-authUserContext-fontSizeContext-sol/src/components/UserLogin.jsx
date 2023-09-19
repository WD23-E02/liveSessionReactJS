import React, {useState, useContext} from "react";
import {AuthContext} from "../context/Auth/context";
import Profile from "./Profile";

function UserLogin() {
  const {login, user} = useContext(AuthContext);

  const [userInputs, setUserInputs] = useState(null);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setUserInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(userInputs);
  };

  return (
    <>
      {user ? (
        <Profile />
      ) : (
        <>
          <div>Please make sure you are logged in</div>
          <form action="" onSubmit={handleSubmit}>
            <input type="email" name="email" id="" onChange={handleChange} />
            <input
              type="password"
              name="password"
              id=""
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </form>
        </>
      )}
    </>
  );
}

export default UserLogin;
