import { Certificate, TeamWithManager, User } from "../../../lib/types";
import ProfileInfoCard from "../ProfileInfoCard/ProfileInfoCard";
import ProfileTeamCard from "../ProfileTeamCard/ProfileTeamCard";
import "./Profile.css";

interface Props {
  user: User;
  teamWithManager: TeamWithManager[];
  certificates: Certificate[];
}

const Profile = ({ user, teamWithManager, certificates }: Props) => {
  return (
    <div className="profile-screen">
      <div className="profile-container flex-2">
        <ProfileInfoCard user={user} />
        <ProfileTeamCard teamWithManager={teamWithManager} />
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
