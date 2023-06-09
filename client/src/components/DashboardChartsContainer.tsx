import { Charts } from "../../lib/types";
import DashboardCharts from "./DashboardCharts/DashboardCharts";

const dummy = {
  left: {
    type: Charts.Pie,
    labels: ["Red", "Blue", "Yellow", "Green"],
    title: "# of votes",
    dataset: [12, 19, 3, 5],
  },
  right: {
    type: Charts.Polar,
    labels: ["Red", "Blue", "Yellow", "Green"],
    title: "# of votes",
    dataset: [12, 19, 3, 5],
  },
};

const DashboardChartsContainer = () => {
  return (
    <div>
      <DashboardCharts left={dummy.left} right={dummy.right} />
    </div>
  );
};

export default DashboardChartsContainer;
