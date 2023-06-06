import { User } from "../../../lib/types";
import { Link, useNavigate } from "react-router-dom";
import "./TeamRow.css";

interface Props {
  user: User;
}

const TeamRow = ({ user }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="team-row-general drop-shadow-md">
      <div className="team-row-role">
        <p>{user.role}</p>
      </div>

      <div className="team-row-name">
        <p>{user.name + " " + user.last_name}</p>
      </div>

      <div
        className="team-row-button"
        onClick={() => {
          navigate(`/profile/${user.email.split("@")[0]}`);
        }}
      >
        <div className="team-row-profile-button">
          <p className="cursor-pointer">View Profile</p>
        </div>
      </div>
    </div>
  );
};

export default TeamRow;
