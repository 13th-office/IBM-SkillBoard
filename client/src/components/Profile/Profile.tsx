import ProfileInfoCard from "../ProfileInfoCard/ProfileInfoCard";
import ProfileTeamCard from "../ProfileTeamCard/ProfileTeamCard";
import "./Profile.css";

const infoDummy = {
  name: "Cristiano",
  last_name: "Ronaldo",
  role: "Bicho",
  email: "cr7@ibm.com",
};

const Profile = () => {
  return (
    <div>
      <div className="profile-container flex-2">
        <ProfileInfoCard user={infoDummy} />
        <ProfileTeamCard />
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
