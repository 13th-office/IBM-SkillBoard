import { Charts } from "../../lib/types";
import DashboardCharts from "./DashboardCharts/DashboardCharts";

const dummy = {
  left: {
    labels: ["Red", "Blue", "Yellow", "Green"],
    title: "# of votes",
    dataset: [12, 19, 3, 5],
  },
  right: {
    labels: ["Red", "Blue", "Yellow", "Green"],
    title: "# of votes",
    dataset: [12, 19, 3, 5],
  },
};

const DashboardChartsContainer = () => {
  return <DashboardCharts left={dummy.left} right={dummy.right} />;
};

export default DashboardChartsContainer;
