import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./SidebarSection.css";

interface Props {
  name: string;
  path: string;
  icon: ReactElement;
  selectedSection: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarSection = ({
  name,
  path,
  icon,
  selectedSection,
  setSelectedSection,
}: Props) => {
  return (
    <Link to={path} onClick={() => setSelectedSection(name)}>
      <div
        className={`${
          selectedSection == name
            ? "sidebar-background-selected"
            : "sidebar-background-not-selected"
        } sidebar-section gap-4 hover:bg-[#002d9c] ease-in-out duration-150`}
      >
        <div>{icon}</div>
        <div>{name}</div>
      </div>
    </Link>
  );
};

export default SidebarSection;
