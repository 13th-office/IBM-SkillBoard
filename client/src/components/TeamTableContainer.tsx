import TeamTable from "./TeamTable/TeamTable";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading/Loading";

const TeamTableContainer = () => {
  const fetchDetails = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/employees/myteamviewer`,
      { withCredentials: true }
    );
    return response.data;
  };

  const { isLoading, error, data } = useQuery(["myteamviewer"], fetchDetails);

  if (isLoading || !data) {
    return <Loading type={true} mainColor={false} />;
  }

  if (error) {
    return <p>error</p>;
  }

  return <TeamTable teams={data.teams} />;
};

export default TeamTableContainer;
