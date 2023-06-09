import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import RecommendedGrid from "./RecommendedGrid/RecommendedGrid";
import Loading from "./Loading/Loading";

const RecommendedContainer = () => {
  const fetchCertificates = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/certificates/all`,
      { withCredentials: true }
    );
    return response.data;
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["dashboard", "all"],
    queryFn: fetchCertificates,
  });

  if (isLoading || !data) {
    <Loading type={true} mainColor={false} />;
  }
  if (error) {
    return <p>Error</p>;
  }
  if (data) {
    return <RecommendedGrid certificates={data} />;
  }

  return <Loading type={true} mainColor={false} />;
};

export default RecommendedContainer;
