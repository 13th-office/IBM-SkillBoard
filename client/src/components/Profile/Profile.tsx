import ProfileInfoCard from "../ProfileInfoCard/ProfileInfoCard";
import ProfileTeamCard from "../ProfileTeamCard/ProfileTeamCard";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <div className="profile-container">
        <ProfileInfoCard />
        <ProfileTeamCard />
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
