import React from "react";
import { BsSearch } from "react-icons/bs";
import EmployeesTable from "../EmployeesTable/EmployeesTable";
import { User } from "../../../lib/types";
import "./Employees.css";
import Loading from "../Loading/Loading";

interface Props {
  employees: User[];
  error: any;
  isLoading: boolean;
}

const Employees = ({ employees, error, isLoading }: Props) => {
  if (isLoading && !employees && !error) {
    return <Loading type={true} mainColor={false} />;
  }

  if (error) {
    return <p>Error</p>;
  }

  return <EmployeesTable employees={employees} />;
};

export default Employees;
