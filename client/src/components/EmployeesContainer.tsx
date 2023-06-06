import Employees from "./Employees/Employees";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import EmployeeSearchBar from "./EmployeesSearchBar/EmployeeSearchBar";

const EmployeesContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const queryClient = useQueryClient();

  const changeTerm = (change: string) => {
    setSearchTerm(change);
    queryClient.invalidateQueries(["employees"]);
  };

  const fetchEmployees = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/search/employees/${searchTerm}`,
      { withCredentials: true }
    );
    return response.data;
  };

  const { isLoading, error, data } = useQuery(
    [`employees`, , `${searchTerm}`],
    fetchEmployees
  );

  return (
    <div className="flex flex-col h-[90vh]">
      <EmployeeSearchBar changeTerm={changeTerm} />
      <Employees employees={data} error={error} isLoading={isLoading} />
    </div>
  );
};

export default EmployeesContainer;
