import "chart.js/auto";
import Chart from "../Chart/Chart";
import "./DashboardCharts.css";
import { Charts, ChartContent } from "../../../lib/types";

interface Props {
  left: ChartContent;
  right: ChartContent;
}

const DashboardCharts = ({ left, right }: Props) => {
  return (
    <div className="main-chart-container">
      <div className="chart-container">
        <Chart chart_content={left} />
      </div>
      <div className="chart-container">
        <Chart chart_content={right} />
      </div>
    </div>
  );
};

export default DashboardCharts;
