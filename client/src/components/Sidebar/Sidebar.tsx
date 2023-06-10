import { useContext, useState } from "react";
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
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Props {
  currentRoute: string;
}

const Sidebar = ({ currentRoute }: Props) => {
  const { setUser } = useContext(UserContext);
  const selectedSection = currentRoute;

  const navigate = useNavigate();

  const logOutMutation = useMutation({
    mutationFn: () => {
      axios.defaults.withCredentials = true;
      axios.defaults.headers.common["Cache-Control"] = "no-cache";
      axios.defaults.headers.common["Pragma"] = "no-cache";
      return axios.post(`${import.meta.env.VITE_SERVER_URL}/logout`, {
        withCredentials: true,
      });
    },
    onSuccess: () => {
      localStorage.removeItem(SESSION_KEY);
      setUser(null);
      navigate("/");
    },
  });

  const handleLogOut = () => {
    logOutMutation.mutate();
  };

  return (
    <div className="sidebar rounded-e-md">
      <SidebarProfileContainer />
      <div className="sidebar-sections gap-1">
        <SidebarSection
          name={"Dashboard"}
          path={"/"}
          icon={<IoBarChartOutline size={"1.6rem"} />}
          selectedSection={selectedSection}
        />
        <SidebarSection
          name={"My Teams"}
          path={"/myteams"}
          icon={<AiOutlineApartment size={"1.6rem"} />}
          selectedSection={selectedSection}
        />
        <SidebarSection
          name={"All Employees"}
          path={"/allemployees"}
          icon={<AiOutlineTeam size={"1.6rem"} />}
          selectedSection={selectedSection}
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
