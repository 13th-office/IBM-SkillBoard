import Employees from "./Employees/Employees";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading/Loading";

const EmployeesContainer = () => {
  const fetchEmployees = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/employees`,
      { withCredentials: true }
    );
    return response.data;
  };

  const { isLoading, error, data } = useQuery([`employees`], fetchEmployees);

  if (isLoading || !data) {
    <Loading type={true} mainColor={false} />;
  }
  if (error) {
    return <p>Error</p>;
  }

  if (data) {
    return (
      <div>
        <Employees employees={data} />
      </div>
    );
  }
  return <Loading type={true} mainColor={false} />;
};

export default EmployeesContainer;
