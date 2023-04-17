import React from "react";
import SidebarProfile from "./SidebarProfile/SidebarProfile";

const name = "Cristiano";
const lastName = "Ronaldo";
const email = "elbicho@ibm.com";
const user = {
  name,
  lastName,
  email,
};

const SidebarProfileContainer = () => {
  return <SidebarProfile user={user} />;
};

export default SidebarProfileContainer;
