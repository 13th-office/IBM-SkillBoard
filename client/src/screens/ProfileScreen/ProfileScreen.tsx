import Header from "../../components/Header/Header";
import ProfileContainer from "../../components/ProfileContainer";

const ProfileScreen = () => {
  return (
    <div className="background-screen">
      <Header title={"My Team"} />
      <ProfileContainer />
    </div>
  );
};

export default ProfileScreen;
