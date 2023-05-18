import { useNavigate } from "react-router-dom";
import { User } from "../../../lib/types";
import "./EmployeeRow.css";

interface Props {
  employee: User;
}

const EmployeeRow = ({ employee }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="EmployeeRow-container flex drop-shadow-md">
      <p>{employee.name + " " + employee.last_name}</p>
      <p>{employee.email}</p>
      <p>{employee.role}</p>
      <div className="employee-row-button">
        <div
          className="employee-row-profile-button"
          onClick={() => {
            // navigate(`/profile/${employee.email.split("@")[0]}`);
            console.log(employee);
            navigate(`/profile/${employee.id}`);
          }}
        >
          <p className="cursor-pointer">View Profile</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeRow;
