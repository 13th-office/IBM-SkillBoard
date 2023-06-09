import Header from "../../components/Header/Header";
import RecommendedContainer from "../../components/RecommendedContainer";

const RecommendedScreen = () => {
  return (
    <div className="background-screen overflow-hidden">
      <Header title={"Recommended"} />
      <RecommendedContainer />
    </div>
  );
};

export default RecommendedScreen;
