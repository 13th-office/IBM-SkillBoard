import DashboardChartsContainer from "../../components/DashboardChartsContainer";
import DashboardTableContainer from "../../components/DashboardTableContainer";
import Header from "../../components/Header/Header";
import "./DashboardScreen.css";

const DashboardScreen = () => {
  return (
    <div className="background-screen h-screen">
      <Header title={"Dashboard"} />
      <div className="dashboard-screen-charts">
        <DashboardChartsContainer />
      </div>
      <div className="dashboard-screen-table">
        <DashboardTableContainer />
      </div>
    </div>
  );
};

export default DashboardScreen;
