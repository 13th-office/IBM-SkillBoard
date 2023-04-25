import React from "react";
import "./SidebarProfile.css";
import { User } from "../../../lib/types";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  user: User;
}

const SidebarProfile = ({ user }: Props) => {
  const navigate = useNavigate();
  return (
    <Link to="/profile">
      <div className="sidebar-profile gap-3">
        <div className="profile-picture">
          {user.name[0] + user.last_name[0]}
        </div>
        <div className="user-info">
          <div>{user.name + " " + user.last_name}</div>
          <div>{user.email}</div>
        </div>
      </div>
    </Link>
  );
};

export default SidebarProfile;
