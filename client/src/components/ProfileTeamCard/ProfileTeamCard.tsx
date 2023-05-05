import React from "react";
import { TeamWithManager } from "../../../lib/types";
import { MdManageAccounts } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import "./ProfileTeamCard.css";

interface Props {
  teamWithManager: TeamWithManager[];
}

const ProfileTeamCard = ({ teamWithManager }: Props) => {
  return (
    <div className="profile-team-card rounded-md drop-shadow-md">
      <p className="profile-team-card-title">Teams</p>
      <div className="profile-team-card-team-container overflow-y-auto overflow-x-hidden">
        {teamWithManager.map((teamManager, index) => (
          <React.Fragment key={index}>
            <div className="profile-team-card-team-cell">
              <div className="flex items-center gap-1">
                <RiTeamFill />
                <p className="profile-team-card-team-name">
                  {teamManager.team.name + " "}
                </p>
              </div>
              <div className="flex items-center">
                <MdManageAccounts />
                <p className="profile-team-card-team-manager">
                  {teamManager.manager.name} {teamManager.manager.last_name}
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProfileTeamCard;
