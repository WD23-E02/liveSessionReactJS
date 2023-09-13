import React, {useContext, useState} from "react";
import {AuthContext} from "../contexts/authContext/context";

function UserLogin() {
  // This state is only used within this component, making it a local state.
  const [data, setData] = useState(null);
  const {updateUser} = useContext(AuthContext);
  function handleChange(e) {
    // To avoid losing your previous data, we are using a callback function along with the spread operator
    setData((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateUser(data);
  }

  return (
    <>
      <div style={{margin: "20px"}}>Please make sure you logged in</div>
      <form action="" onChange={handleChange} onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="inter your email" />
        <input
          type="password"
          name="password"
          placeholder="inter your password"
        />
        <button type="submit">Submit info</button>
      </form>
    </>
  );
}

export default UserLogin;
