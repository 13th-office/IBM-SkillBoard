import "chart.js/auto";
import Chart from "../Chart/Chart";
import "./DashboardCharts.css";
import { ChartContent, Charts } from "../../../lib/types";

interface Props {
  left: ChartContent;
  right: ChartContent;
}

const DashboardCharts = ({ left, right }: Props) => {
  return (
    <div className="main-chart-container">
      <div className="chart-container">
        <Chart chart_content={left} type={Charts.Pie} />
      </div>
      <div className="chart-container">
        <Chart chart_content={right} type={Charts.Polar} />
      </div>
    </div>
  );
};

export default DashboardCharts;
