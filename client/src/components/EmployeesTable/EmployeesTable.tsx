import EmployeeRow from "../EmployeeRow/EmployeeRow";
import "./EmployeesTable.css";

const EmployeesTable = () => {
  return (
    <div className="employeestable-container">
      <div className="flex flex-row employeestable-header">
        <p className="w-[25%]">Nombre</p>
        <p className="w-[25%]">Email</p>
        <p className="w-[25%]">Role</p>
        <p className="w-[25%]"></p>
      </div>
      <div className="employeestable-content">
        <EmployeeRow />
      </div>
    </div>
  );
};

export default EmployeesTable;
