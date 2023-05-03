import React from "react";
import { useState } from "react";
import Select from "react-select";
import { BsSearch } from "react-icons/bs";
import EmployeesTable from "../EmployeesTable/EmployeesTable";
import "./Employees.css";

const Employees = () => {
  const [values, setValues] = useState("Category");
  const [searchTerm, setSearchTerm] = React.useState("");

  const options = [
    {
      value: "Category",
      label: "Category",
    },
    {
      value: "Industry",
      label: "Industry",
    },
    {
      value: "IBM",
      label: "IBM",
    },
    {
      value: "MyTeam",
      label: "MyTeam",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row employees-filter">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSubmit={() => console.log(searchTerm)}
          placeholder="Search"
          className="shadow-md text-sm employees-filter-search"
        />
        <Select
          options={options}
          defaultValue={{
            value: "Category",
            label: "Category",
          }}
          onChange={(values) => values && setValues(values.value)}
          placeholder="Category"
          className="shadow-md text-sm employees-filter-category"
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              color: "#7A7A7A",
              border: "none",
              width: "100%",
              backgroundColor: "#f4f4f4",
              fontWeight: 1000,
              borderRadius: 10,
            }),
          }}
        />
      </div>
      <EmployeesTable />
    </div>
  );
};

export default Employees;