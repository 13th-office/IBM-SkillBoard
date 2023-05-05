import SidebarProfile from "./SidebarProfile/SidebarProfile";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading/Loading";

const id = "cr7id";
const name = "Cristiano";
const last_name = "Ronaldo";
const email = "elbicho@ibm.com";
const role = "Bicho Manager";
const user = {
  id,
  name,
  last_name,
  email,
  role,
};

const SidebarProfileContainer = () => {
  const fetchDetails = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/viewer`,
      { withCredentials: true }
    );
    return response.data;
  };

  const { isLoading, error, data } = useQuery(["viewer"], fetchDetails);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
    return <p>error</p>;
  }

  return <SidebarProfile user={data.employee} />;
};

export default SidebarProfileContainer;
