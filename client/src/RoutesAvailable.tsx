import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import DashboardScreen from "./screens/DashboardScreen/DashboardScreen";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import MyTeamsScreen from "./screens/MyTeamsScreen/MyTeamsScreen";
import AllEmployeesScreen from "./screens/AllEmployeesScreen/AllEmployeesScreen";
import { useLocation } from "react-router-dom";

const RoutesAvailable = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const currentRoute = location.pathname;

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<LoginScreen />}></Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    return (
      <div className="flex">
        <Sidebar currentRoute={currentRoute.split("/")[1]} />
        <Routes>
          <Route path="/dashboard" element={<DashboardScreen />}></Route>
          <Route path="/profile/:username" element={<ProfileScreen />}></Route>
          <Route path="/myteams" element={<MyTeamsScreen />}></Route>
          <Route path="/allemployees" element={<AllEmployeesScreen />}></Route>
          <Route path="/*" element={<Navigate to="/dashboard" />}></Route>
        </Routes>
      </div>
    );
  }
};

export default RoutesAvailable;
