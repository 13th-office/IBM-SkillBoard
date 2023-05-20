import { useState } from "react";
import DashboardTable from "./DashboardTable/DashboardTable";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading/Loading";

const DashboardTableContainer = () => {
  const certificates = [
    {
      id: "1",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "2",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "3",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "4",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "5",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "6",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "7",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "8",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "9",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "10",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "11",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
    {
      id: "12",
      name: "SCRUM Master Certificate",
      type: "IBM",
      categories: [
        { id: "1", name: "SCRUM" },
        { id: "2", name: "Organization" },
      ],
      expiration_date: "Feb 14th, 2099",
    },
  ];

  const [type, setType] = useState("all");

  const fetchDashboard = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/certificates/${type}`,
      { withCredentials: true }
    );
    return response.data;
  };

  const { isLoading, error, data } = useQuery([`employees`], fetchDashboard);

  if (isLoading || !data) {
    <Loading />;
  }
  if (error) {
    return <p>Error</p>;
  }

  if (data) {
    console.log(data);
    return <DashboardTable certificates={data} setType={setType} />;
  }
  return <Loading />;
};

export default DashboardTableContainer;
