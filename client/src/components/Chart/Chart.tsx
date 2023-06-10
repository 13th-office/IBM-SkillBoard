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

  const responsive = true;

  const aspectRatio = false;

  const borderWith = 1;

  if (type === Charts.Bar) {
    return (
      <Bar
        data={{
          labels: chart_content.labels,
          datasets: [
            {
              data: chart_content.dataset,
              backgroundColor: backgroundColors,
              borderColor: borderColors,
              borderWidth: borderWith,
            },
          ],
        }}
        options={{
          responsive: responsive,
          maintainAspectRatio: aspectRatio,
          plugins: {
            title: {
              display: true,
              text: chart_content.title,
              font: { size: 16 },
            },
            legend: { display: false },
          },
          scales: {
            x: {
              ticks: {
                callback: function (value: any) {
                  let characterLimit = 15;
                  let label: string = this.getLabelForValue(value);
                  if (label.length >= characterLimit) {
                    return (
                      label
                        .slice(0, label.length)
                        .substring(0, characterLimit - 1)
                        .trim() + "..."
                    );
                  }
                  return label;
                },
              },
            },
          },
        }}
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
              data: chart_content.dataset,
              backgroundColor: backgroundColors,
              borderColor: borderColors,
              borderWidth: borderWith,
            },
          ],
        }}
        options={{
          responsive: responsive,
          maintainAspectRatio: aspectRatio,
          plugins: {
            title: {
              display: true,
              text: chart_content.title,
              font: { size: 16 },
            },
          },
        }}
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
              data: chart_content.dataset,
              backgroundColor: backgroundColors,
              borderColor: borderColors,
              borderWidth: borderWith,
            },
          ],
        }}
        options={{
          responsive: responsive,
          maintainAspectRatio: aspectRatio,
          plugins: {
            title: {
              display: true,
              text: chart_content.title,
              font: { size: 16 },
            },
          },
        }}
      />
    );
  }

  return <div>No chart specified</div>;
}

export default Chart;
