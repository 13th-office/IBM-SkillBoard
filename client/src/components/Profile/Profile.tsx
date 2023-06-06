import {
  Certificate,
  CertificateResponse,
  TeamWithManager,
  User,
} from "../../../lib/types";
import ProfileInfoCard from "../ProfileInfoCard/ProfileInfoCard";
import ProfileTeamCard from "../ProfileTeamCard/ProfileTeamCard";
import ProfileCertifications from "../ProfileCertifications/ProfileCertifications";
import "./Profile.css";

interface Props {
  user: User;
  teamWithManager: TeamWithManager[];
  certificates: CertificateResponse[];
}

const Profile = ({ user, teamWithManager, certificates }: Props) => {
  return (
    <div className="profile-screen">
      <div className="profile-container flex-2">
        <ProfileInfoCard user={user} />
        <ProfileTeamCard teamWithManager={teamWithManager} />
      </div>
      <div className="max-h-[50vh] h-[40vh]">
        <ProfileCertifications user={user} certificates={certificates} />
      </div>
    </div>
  );
};

export default Profile;
