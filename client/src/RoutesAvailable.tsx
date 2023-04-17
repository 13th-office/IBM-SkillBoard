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
      <div className="flex">
        <div className=" h-screen w-1/6 bg-blue-800"></div>
        <Routes>
          <Route path="/" element={<DashboardScreen />}></Route>
        </Routes>
      </div>
    );
  }
};

export default RoutesAvailable;
