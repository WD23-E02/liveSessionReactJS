import React, {useContext} from "react";
import {AuthContext} from "../contexts/authContext/context";
import UserLogin from "./UserLogin";

function Profile() {
  const {user} = useContext(AuthContext);

  return <div>{user ? user.email : <UserLogin />}</div>;
}

export default Profile;
