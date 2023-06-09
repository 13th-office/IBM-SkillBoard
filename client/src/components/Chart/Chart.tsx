import "chart.js/auto";
import { Pie, Bar, PolarArea } from "react-chartjs-2";
import { ChartContent, Charts } from "../../../lib/types";

interface Props {
  chart_content: ChartContent;
  type: Charts;
}

function Chart({ chart_content, type }: Props) {
  const backgroundColors = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
  ];

  const borderColors = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
  ];

  const borderWith = 1;

  if (type === Charts.Bar) {
    return (
      <Bar
        data={{
          labels: chart_content.labels,
          datasets: [
            {
              label: chart_content.title,
              data: chart_content.dataset,
              backgroundColor: backgroundColors,
              borderColor: borderColors,
              borderWidth: borderWith,
            },
          ],
        }}
        options={{ responsive: true, maintainAspectRatio: false }}
      />
    );
  }

  if (type === Charts.Pie) {
    return (
      <Pie
        data={{
          labels: chart_content.labels,
          datasets: [
            {
              label: chart_content.title,
              data: chart_content.dataset,
              backgroundColor: backgroundColors,
              borderColor: borderColors,
              borderWidth: 1,
            },
          ],
        }}
        options={{ responsive: true, maintainAspectRatio: false }}
      />
    );
  }

  if (type === Charts.Polar) {
    return (
      <PolarArea
        data={{
          labels: chart_content.labels,
          datasets: [
            {
              label: chart_content.title,
              data: chart_content.dataset,
              backgroundColor: backgroundColors,
              borderColor: borderColors,
              borderWidth: 1,
            },
          ],
        }}
        options={{ responsive: true, maintainAspectRatio: false }}
      />
    );
  }

  return <div>No chart specified</div>;
}

{
  /* <Pie
          data={{
            labels: ["Red", "Blue", "Yellow", "Green"],
            datasets: [
              {
                label: "# of votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                ],
                borderWidth: 1,
              },
              // {
              //   label: 'Quantity',
              //   data: [47, 52, 67, 58, 9, 50],
              //   backgroundColor: 'orange',
              //   borderColor: 'red',
              // },
            ],
          }}
          options={{ responsive: true, maintainAspectRatio: false }}
        /> */
}

export default Chart;
