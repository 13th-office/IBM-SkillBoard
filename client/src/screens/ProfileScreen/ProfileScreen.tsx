import Header from "../../components/Header/Header";
import ProfileContainer from "../../components/ProfileContainer";

const ProfileScreen = () => {
  return (
    <div className="background-screen overflow-hidden">
      <Header title={"Profile"} />
      <ProfileContainer />
    </div>
  );
};

export default ProfileScreen;
