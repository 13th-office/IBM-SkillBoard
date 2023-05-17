import React from "react";
import Profile from "./Profile/Profile";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading/Loading";

const ProfileContainer = () => {
  const params = useParams();

  const fetchDetails = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/employees/${params.username}`,
      { withCredentials: true }
    );
    return response.data;
  };

  const { isLoading, error, data } = useQuery(
    [`profile${params.username}`],
    fetchDetails
  );

  if (isLoading || !data) {
    <Loading />;
  }
  if (error) {
    return <p>Error</p>;
  }

  if (data) {
    return (
      <div>
        <Profile
          user={data.employee}
          teamWithManager={data.teams}
          certificates={data.certificates}
        />
      </div>
    );
  }

  return <Loading />;
};

export default ProfileContainer;
