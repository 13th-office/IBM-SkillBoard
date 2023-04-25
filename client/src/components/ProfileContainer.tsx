import React from "react";
import Profile from "./Profile/Profile";

const infoDummy = {
  id: "cr7id",
  name: "Cristiano",
  last_name: "Ronaldo",
  role: "Bicho",
  email: "cr7@ibm.com",
};

const teamDummy = [
  {
    team: {
      id: "1",
      team_name: "Backend Management",
    },
    manager: {
      id: "id",
      name: "Camello",
      last_name: "Petrolero",
      email: "camello@ibm.com",
      role: "Camello Manager",
    },
  },
  {
    team: {
      id: "1",
      team_name: "Backend Management",
    },
    manager: {
      id: "id",
      name: "Camello",
      last_name: "Petrolero",
      email: "camello@ibm.com",
      role: "Camello Manager",
    },
  },
  {
    team: {
      id: "1",
      team_name: "Backend Management",
    },
    manager: {
      id: "id",
      name: "Camello",
      last_name: "Petrolero",
      email: "camello@ibm.com",
      role: "Camello Manager",
    },
  },
  {
    team: {
      id: "1",
      team_name: "Backend Management",
    },
    manager: {
      id: "id",
      name: "Camello",
      last_name: "Petrolero",
      email: "camello@ibm.com",
      role: "Camello Manager",
    },
  },
  {
    team: {
      id: "1",
      team_name: "Backend Management",
    },
    manager: {
      id: "id",
      name: "Camello",
      last_name: "Petrolero",
      email: "camello@ibm.com",
      role: "Camello Manager",
    },
  },
  {
    team: {
      id: "1",
      team_name: "Backend Management",
    },
    manager: {
      id: "id",
      name: "Camello",
      last_name: "Petrolero",
      email: "camello@ibm.com",
      role: "Camello Manager",
    },
  },
];

const ProfileContainer = () => {
  return (
    <div>
      <Profile user={infoDummy} teamWithManager={teamDummy} />
    </div>
  );
};

export default ProfileContainer;
