import { Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import DashboardScreen from "./screens/DashboardScreen/DashboardScreen";

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
      <Routes>
        <Route path="/" element={<DashboardScreen />}></Route>
      </Routes>
    );
  }
};

export default RoutesAvailable;
