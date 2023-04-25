import Header from "../../components/Header/Header";
import ProfileContainer from "../../components/ProfileContainer";

const ProfileScreen = () => {
  return (
    <div className="background-screen">
      <Header title={"Profile"} />
      <ProfileContainer />
    </div>
  );
};

export default ProfileScreen;
