import Header from "../../components/Header/Header";
import Profile from "../../components/Profile/Profile";

const ProfileScreen = () => {
  return (
    <div className="background-screen">
      <Header title={"My Team"} />
      <Profile />
    </div>
  );
};

export default ProfileScreen;
