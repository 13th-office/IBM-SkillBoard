import React from "react";
import Profile from "./Profile/Profile";

const infoDummy = {
  name: "Cristiano",
  last_name: "Ronaldo",
  role: "Bicho",
  email: "cr7@ibm.com",
};

const ProfileContainer = () => {
  return (
    <div>
      <Profile user={infoDummy} />
    </div>
  );
};

export default ProfileContainer;
