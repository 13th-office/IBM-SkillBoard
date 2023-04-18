import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./SidebarSection.css";

interface Props {
  name: string;
  path: string;
  icon: ReactElement;
}

const SidebarSection = ({ name, path, icon }: Props) => {
  return (
    <Link to={path}>
      <div className="sidebar-section gap-4">
        <div>{icon}</div>
        <div>{name}</div>
      </div>
    </Link>
  );
};

export default SidebarSection;
