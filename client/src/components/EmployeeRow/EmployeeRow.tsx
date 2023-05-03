import React from "react";
import { User } from "../../../lib/types";
import "./EmployeeRow.css";

interface Props {
  employee: User;
}

const EmployeeRow = ({ employee }: Props) => {
  return (
    <div className="EmployeeRow-container flex drop-shadow-md">
      <p>{employee.name + " " + employee.last_name}</p>
      <p>{employee.email}</p>
      <p>{employee.role}</p>
      <div className="employee-row-button">
        <div className="employee-row-profile-button">
          <p className="cursor-pointer">View Profile</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeRow;
