import { useContext } from "react";
import "./Sidebar.css";
import SidebarProfileContainer from "../SidebarProfileContainer";
import SidebarSection from "../SidebarSection/SidebarSection";
import Logo from "../Logo";
import { IoBarChartOutline } from "react-icons/io5";
import { AiOutlineApartment, AiOutlineTeam } from "react-icons/ai";
import { BsBoxArrowLeft } from "react-icons/bs";
import { SESSION_KEY } from "../../../lib/constants";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { setUser } = useContext(UserContext);

  const handleLogOut = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  return (
    <div className="sidebar">
      <SidebarProfileContainer />
      <div className="sidebar-sections gap-1">
        <SidebarSection
          name={"Dashboard"}
          path={"/"}
          icon={<IoBarChartOutline size={"1.6rem"} />}
        />
        <SidebarSection
          name={"My Team"}
          path={"/myteams"}
          icon={<AiOutlineApartment size={"1.6rem"} />}
        />
        <SidebarSection
          name={"Employees"}
          path={"/allemployees"}
          icon={<AiOutlineTeam size={"1.6rem"} />}
        />
      </div>
      <div className="flex flex-col items-center">
        <button className="logout-button gap-2 mb-5" onClick={handleLogOut}>
          <BsBoxArrowLeft />
          <p>Log out</p>
        </button>
        <Link className="logo-sidebar" to="/">
          <div className="w-1/2 hover:scale-105 ease-in-out duration-300">
            <Logo color={true} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
