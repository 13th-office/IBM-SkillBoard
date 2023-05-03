import EmployeeRow from "../EmployeeRow/EmployeeRow";
import { User } from "../../../lib/types";
import "./EmployeesTable.css";

interface Props {
  employees: User[];
}

const EmployeesTable = ({ employees }: Props) => {
  return (
    <div className="employeestable-container overflow-auto">
      <div className="flex flex-row employeestable-header">
        <p className="w-[25%]">Nombre</p>
        <p className="w-[25%]">Email</p>
        <p className="w-[25%]">Role</p>
        <p className="w-[25%]"></p>
      </div>
      <div className="employeestable-content">
        {employees.map((employee, index) => (
          <EmployeeRow employee={employee} key={index} />
        ))}
      </div>
    </div>
  );
};

export default EmployeesTable;
