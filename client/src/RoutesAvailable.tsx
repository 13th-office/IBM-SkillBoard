import { Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import DashboardScreen from "./screens/DashboardScreen/DashboardScreen";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import MyTeamsScreen from "./screens/MyTeamsScreen/MyTeamsScreen";
import AllEmployeesScreen from "./screens/AllEmployeesScreen/AllEmployeesScreen";

const RoutesAvailable = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<LoginScreen />}></Route>
      </Routes>
    );
  } else {
    return (
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardScreen />}></Route>
          <Route path="/profile" element={<ProfileScreen />}></Route>
          <Route path="/myteams" element={<MyTeamsScreen />}></Route>
          <Route path="/allemployees" element={<AllEmployeesScreen />}></Route>
        </Routes>
      </div>
    );
  }
};

export default RoutesAvailable;
