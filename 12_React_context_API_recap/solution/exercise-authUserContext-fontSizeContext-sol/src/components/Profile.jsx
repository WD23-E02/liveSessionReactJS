import React, {useContext} from "react";
import {AuthContext} from "../context/Auth/context";
import UserLogin from "./UserLogin";
function Profile() {
  const {user} = useContext(AuthContext);
  return (
    <div style={{marginTop: "20px"}}>{user ? user.email : <UserLogin />}</div>
  );
}

export default Profile;
