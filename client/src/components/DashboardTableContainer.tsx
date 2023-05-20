import { useState, useEffect } from "react";
import DashboardTable from "./DashboardTable/DashboardTable";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Loading from "./Loading/Loading";

const DashboardTableContainer = () => {
  const [type, setType] = useState("all");

  const queryClient = useQueryClient();

  const changeType = (change: string) => {
    setType(change);
    queryClient.invalidateQueries(["dashboard"]);
  };

  const fetchDashboard = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/certificates/${type}`,
      { withCredentials: true }
    );
    return response.data;
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["dashboard", `${type}`],
    queryFn: fetchDashboard,
  });

  if (isLoading || !data) {
    <Loading />;
  }
  if (error) {
    return <p>Error</p>;
  }

  if (data) {
    return <DashboardTable data={data} changeType={changeType} />;
  }
  return <Loading />;
};

export default DashboardTableContainer;
