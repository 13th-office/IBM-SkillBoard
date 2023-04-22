import { UserInfo } from "../../../lib/types";
import "./ProfileInfoCard.css";

interface Props {
  userInfo: UserInfo;
}

const ProfileInfoCard = ({ userInfo }: Props) => {
  return (
    <div className="profile-info-card">
      <div className="profile-picture-half">
        <div className="profile-info-picture">
          {userInfo.name[0]}
          {userInfo.last_name[0]}
        </div>
      </div>
      <div className="profile-info-half gap-2">
        <p>
          {userInfo.name} {userInfo.last_name}
        </p>
        <p>{userInfo.role}</p>

        <div className="profile-info-labeled-container">
          <p>Manager</p>
          <p>{userInfo.manager}</p>
        </div>
        <div className="profile-info-labeled-container">
          <p>Email</p>
          <p>{userInfo.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoCard;
