import Employees from "./Employees/Employees";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading/Loading";

const EmployeesContainer = () => {
  const fetchDetails = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/employees`,
      { withCredentials: true }
    );
    return response.data;
  };

  const { isLoading, error, data } = useQuery([`employees`], fetchDetails);

  if (isLoading || !data) {
    <Loading />;
  }
  if (error) {
    return <p>Error</p>;
  }

  if (data) {
    return <Employees employees={data} />;
  }
};

export default EmployeesContainer;
