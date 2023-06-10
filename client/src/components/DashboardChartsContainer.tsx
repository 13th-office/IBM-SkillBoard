import DashboardCharts from "./DashboardCharts/DashboardCharts";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading/Loading";

const DashboardChartsContainer = () => {
  const fetchCharts = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/certificates/dashboard_charts`,
      { withCredentials: true }
    );
    return response.data;
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["dashboard_charts"],
    queryFn: fetchCharts,
  });

  if (isLoading && !data && !error) {
    return <Loading type={true} mainColor={false} />;
  }

  if (error) {
    return <p>error</p>;
  }

  return <DashboardCharts left={data.left} right={data.right} />;
};

export default DashboardChartsContainer;
