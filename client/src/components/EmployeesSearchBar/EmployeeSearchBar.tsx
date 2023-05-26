import React from "react";
import { BsSearch } from "react-icons/bs";
import "./EmployeeSearchBar.css";

interface Props {
  changeTerm: (change: string) => void;
}

const EmployeeSearchBar = ({ changeTerm }: Props) => {
  return (
    <div className="flex flex-row employees-filter">
      <div className="shadow-md text-sm employees-filter-search">
        <BsSearch />
        <input
          onChange={(e) => changeTerm(e.target.value)}
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default EmployeeSearchBar;
