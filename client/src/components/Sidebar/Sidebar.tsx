import React from "react";
import "./Sidebar.css";
import SidebarProfileContainer from "../SidebarProfileContainer";
import SidebarSection from "../SidebarSection/SidebarSection";
import Logo from "../Logo";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarProfileContainer />
      <div className="sidebar-sections gap-1">
        <SidebarSection name={"Dashboard"} path={""} />
        <SidebarSection name={"My Team"} path={""} />
        <SidebarSection name={"Employees"} path={""} />
      </div>
      <div className="logo-sidebar w-2/3">
        <Logo color={true} />
      </div>
    </div>
  );
};

export default Sidebar;
