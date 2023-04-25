import React from "react";
import { User } from "../../../lib/types";
import "./TeamRow.css";

interface Props {
  user: User;
}

const TeamRow = ({ user }: Props) => {
  return (
    <div className="team-row-general drop-shadow-md">
      <div className="flex flex-row w-[15%] justify-start ml-[15px]">
        <p>{user.role}</p>
      </div>

      <div className="flex flex-row w-[70%] justify-start ml-[15px]">
        <p>{user.name}</p>
      </div>

      <div className="flex flex-row w-[15%] justify-end mr-[15px]">
        <div className="team-row-profile-button">
          <p className="cursor-pointer">View Profile</p>
        </div>
      </div>
    </div>
  );
};

export default TeamRow;
