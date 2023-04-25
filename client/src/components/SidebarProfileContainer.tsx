import React from "react";
import SidebarProfile from "./SidebarProfile/SidebarProfile";

const id = "cr7id";
const name = "Cristiano";
const last_name = "Ronaldo";
const email = "elbicho@ibm.com";
const role = "Bicho Manager";
const user = {
  id,
  name,
  last_name,
  email,
  role,
};

const SidebarProfileContainer = () => {
  return <SidebarProfile user={user} />;
};

export default SidebarProfileContainer;
