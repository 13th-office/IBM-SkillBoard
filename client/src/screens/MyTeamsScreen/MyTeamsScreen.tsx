import Header from "../../components/Header/Header";
import TeamTableContainer from "../../components/TeamTableContainer";

const MyTeamsScreen = () => {
  return (
    <div className="background-screen overflow-auto">
      <Header title={"My Teams"} />
      <TeamTableContainer />
    </div>
  );
};

export default MyTeamsScreen;
