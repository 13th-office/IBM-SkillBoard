import React from "react";
import "./EmployeeRow.css";

const EmployeeRow = () => {
  return (
    <div className="EmployeeRow-container flex drop-shadow-md">
      <p>John Doe</p>
      <p>johndoe@ibm.mx</p>
      <p>Front-end Developer</p>
      <div className="employee-row-button">
        <div className="employee-row-profile-button">
          <p className="cursor-pointer">View Profile</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeRow;
