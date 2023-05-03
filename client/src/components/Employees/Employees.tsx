import React from "react";
import { BsSearch } from "react-icons/bs";
import EmployeesTable from "../EmployeesTable/EmployeesTable";
import { User } from "../../../lib/types";
import "./Employees.css";

interface Props {
  employees: User[];
}

const Employees = ({ employees }: Props) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="flex flex-col h-[90vh]">
      <div className="flex flex-row employees-filter">
        <div className="shadow-md text-sm employees-filter-search">
          <BsSearch />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onSubmit={() => console.log(searchTerm)}
            placeholder="Search"
          />
        </div>
      </div>
      <EmployeesTable employees={employees} />
    </div>
  );
};

export default Employees;
