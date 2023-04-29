import Header from "../../components/Header/Header";
import EmployeesContainer from "../../components/EmployeesContainer";

const AllEmployeesScreen = () => {
  return (
    <div className="background-screen">
      <Header title={"All Employees"} />
      <EmployeesContainer />
    </div>
  );
};

export default AllEmployeesScreen;
