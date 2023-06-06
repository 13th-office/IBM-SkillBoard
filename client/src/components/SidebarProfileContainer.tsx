import SidebarProfile from "./SidebarProfile/SidebarProfile";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading/Loading";

const SidebarProfileContainer = () => {
  const fetchDetails = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/employees/viewer`,
      { withCredentials: true }
    );
    return response.data;
  };

  const { isLoading, error, data } = useQuery(["viewer"], fetchDetails);

  if (isLoading && !data && !error) {
    return <Loading type={false} mainColor={true} />;
  }

  if (error) {
    return <p>error</p>;
  }

  return <SidebarProfile user={data.employee} />;
};

export default SidebarProfileContainer;
