import { TeamWithManager } from "../../../lib/types";
import "./ProfileTeamCard.css";

interface Props {
  teamWithManager: TeamWithManager[];
}

const ProfileTeamCard = ({ teamWithManager }: Props) => {
  return (
    <div className="profile-team-card">
      <p className="profile-team-card-title">Teams</p>
      <div className="overflow-y-auto overflow-x-hidden">
        {teamWithManager.map((teamManager, index) => (
          <div className="profile-team-card-team-cell">
            <p>{teamManager.team.team_name + " "}</p>
            <p>
              {teamManager.manager.name} {teamManager.manager.last_name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileTeamCard;
