import React from "react";
import Profile from "./Profile/Profile";

const profile_info = {
  user: {
    id: "cr7id",
    name: "Cristiano",
    last_name: "Ronaldo",
    role: "Bicho",
    email: "cr7@ibm.com",
  },
  team: [
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
  ],
  cerificates: [
    {
      id: "dsadsa",
      name: "Azure DevOps Certification",
      type: "Industry",
      categories: [
        { id: "1234", name: "Azure" },
        { id: "12345", name: "DevOps" },
      ],
      expiration_date: "2024-04-01",
    },
    {
      id: "21",
      name: "Microsoft Teams Certification",
      type: "Industry",
      categories: [
        { id: "12", name: "Microsoft" },
        { id: "43", name: "Team Managment" },
      ],
      expiration_date: "2024-04-01",
    },
    {
      id: "45",
      name: "IBM SkillBoard Ceritfication",
      type: "IBM",
      categories: [
        { id: "32", name: "IBM" },
        { id: "21", name: "Skills" },
      ],
      expiration_date: "2024-04-01",
    },
    {
      id: "56",
      name: "AWS Certification",
      type: "Industry",
      categories: [
        { id: "431", name: "Amazon" },
        { id: "67", name: "DevOps" },
      ],
      expiration_date: "2024-04-01",
    },
    {
      id: "56",
      name: "AWS Certification",
      type: "Industry",
      categories: [
        { id: "431", name: "Amazon" },
        { id: "67", name: "DevOps" },
      ],
      expiration_date: "2024-04-01",
    },
    {
      id: "56",
      name: "AWS Certification",
      type: "Industry",
      categories: [
        { id: "431", name: "Amazon" },
        { id: "67", name: "DevOps" },
      ],
      expiration_date: "2024-04-01",
    },
    {
      id: "56",
      name: "AWS Certification",
      type: "Industry",
      categories: [
        { id: "431", name: "Amazon" },
        { id: "67", name: "DevOps" },
      ],
      expiration_date: "2024-04-01",
    },
    {
      id: "56",
      name: "AWS Certification",
      type: "Industry",
      categories: [
        { id: "431", name: "Amazon" },
        { id: "67", name: "DevOps" },
      ],
      expiration_date: "2024-04-01",
    },
    {
      id: "56",
      name: "AWS Certification",
      type: "Industry",
      categories: [
        { id: "431", name: "Amazon" },
        { id: "67", name: "DevOps" },
      ],
      expiration_date: "2024-04-01",
    },
    {
      id: "56",
      name: "AWS Certification",
      type: "Industry",
      categories: [
        { id: "431", name: "Amazon" },
        { id: "67", name: "DevOps" },
      ],
      expiration_date: "2024-04-01",
    },
    {
      id: "56",
      name: "AWS Certification",
      type: "Industry",
      categories: [
        { id: "431", name: "Amazon" },
        { id: "67", name: "DevOps" },
      ],
      expiration_date: "2024-04-01",
    },
  ],
};

const ProfileContainer = () => {
  return (
    <div>
      <Profile
        user={profile_info.user}
        teamWithManager={profile_info.team}
        certificates={profile_info.cerificates}
      />
    </div>
  );
};

export default ProfileContainer;
