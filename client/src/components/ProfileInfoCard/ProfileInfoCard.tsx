import { User } from "../../../lib/types";
import "./ProfileInfoCard.css";

interface Props {
  user: User;
}

const ProfileInfoCard = ({ user }: Props) => {
  console.log(localStorage.getItem("session_key"));
  return (
    <div className="profile-info-card">
      <div className="profile-picture-half">
        <div className="profile-info-picture">
          {user.name[0]}
          {user.last_name[0]}
        </div>
      </div>
      <div className="profile-info-half gap-2">
        <p className="profile-info-card-name">
          {user.name} {user.last_name}
        </p>
        <p>{user.role}</p>
        <div className="profile-info-labeled-container gap-2">
          <div className="profile-info-labeled-container-title">Email</div>
          <div>{user.email}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoCard;
