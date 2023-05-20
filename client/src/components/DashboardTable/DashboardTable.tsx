import CertificationRow from "../CertificationRow/CertificationRow";
import { Certificate, CertificateResponse } from "../../../lib/types";
import "./DashboardTable.css";
import { BsCircleFill } from "react-icons/bs";
import Select from "react-select";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "../Loading/Loading";

interface Props {
  data: CertificateResponse[];
  changeType: (change: string) => void;
  isLoading: boolean;
  error: any;
}

interface Colors {
  ibm: string;
  my_team: string;
  industry: string;
}

const colors: Colors = {
  ibm: "#001756",
  industry: "#b40000",
  my_team: "#658eff",
};

const options = [
  {
    value: "all",
    label: "All",
    icon: <BsCircleFill color={"#FFFFFF"} />,
  },
  {
    value: "industry",
    label: "Industry",
    icon: <BsCircleFill color={colors["industry" as keyof Colors]} />,
  },
  {
    value: "ibm",
    label: "IBM",
    icon: <BsCircleFill color={colors["ibm" as keyof Colors]} />,
  },
  {
    value: "my_teams",
    label: "MyTeam",
    icon: <BsCircleFill color={colors["my_team" as keyof Colors]} />,
  },
];

const DashboardTable = ({ data, changeType, isLoading, error }: Props) => {
  return (
    <div className="flex flex-col w-full max-h-[90%] DashboardTable">
      <div className="DashboardTable_Filters mb-3">
        <Select
          options={options}
          defaultValue={{
            value: "all",
            label: "All",
            icon: <BsCircleFill color="#ffffff" />,
          }}
          onChange={(values) => {
            if (values) {
              changeType(values.value);
            }
          }}
          placeholder="All"
          className="shadow-md text-sm"
          //@ts-ignore
          getOptionLabel={(e) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              {e.icon}
              <span style={{ marginLeft: 9 }}>{e.label}</span>
            </div>
          )}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              border: 0,
              width: "100%",
            }),
          }}
        />

        <p className="font-semibold text-sm">Name</p>
        <p className="font-semibold text-sm">Type</p>
        <p className="font-semibold text-sm">Categories</p>
        <p className="font-semibold text-sm">Industry compatiblity</p>
      </div>

      {(isLoading || (!data && !error)) && <Loading />}
      {error && <p>Error</p>}
      {data && (
        <div className="overflow-y-auto overflow-x-hidden">
          {data.map((data, index) => (
            <CertificationRow
              key={`${data.certificate.id} ${index}`}
              certificate={data.certificate}
              categories={data.categories}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardTable;
