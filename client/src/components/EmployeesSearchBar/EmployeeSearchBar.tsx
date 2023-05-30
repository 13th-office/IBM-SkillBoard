import React from "react";
import { BsSearch } from "react-icons/bs";
import "./EmployeeSearchBar.css";
import debounce from "lodash.debounce";

interface Props {
  changeTerm: (change: string) => void;
}

const EmployeeSearchBar = ({ changeTerm }: Props) => {
  const debouncedOnChange = debounce(changeTerm, 500);

  return (
    <div className="flex flex-row employees-filter">
      <div className="shadow-md text-sm employees-filter-search">
        <BsSearch />
        <input
          onChange={(e) => debouncedOnChange(e.target.value)}
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default EmployeeSearchBar;
