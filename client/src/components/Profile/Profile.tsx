import { User } from "../../../lib/types";
import ProfileInfoCard from "../ProfileInfoCard/ProfileInfoCard";
import ProfileTeamCard from "../ProfileTeamCard/ProfileTeamCard";
import "./Profile.css";

interface Props {
  user: User;
}

const Profile = ({ user }: Props) => {
  return (
    <div>
      <div className="profile-container flex-2">
        <ProfileInfoCard user={user} />
        <ProfileTeamCard />
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
