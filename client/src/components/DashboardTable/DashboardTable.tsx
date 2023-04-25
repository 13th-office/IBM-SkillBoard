import CertificationRow from "../CertificationRow/CertificationRow";
import { Certificate } from "../../../lib/types";
import "./DashboardTable.css";
import { BsCircleFill } from "react-icons/bs";
import Select from "react-select";
import { useState } from "react";
interface Props {
  certificates: Certificate[];
}

interface Colors {
  IBM: string;
  MyTeam: string;
  Industry: string;
}

const colors: Colors = {
  IBM: "#001756",
  MyTeam: "#b40000",
  Industry: "#658eff",
};

const options = [
  {
    value: "All",
    label: "All",
    icon: <BsCircleFill color={"#FFFFFF"} />,
  },
  {
    value: "Industry",
    label: "Industry",
    icon: <BsCircleFill color={colors["Industry" as keyof Colors]} />,
  },
  {
    value: "IBM",
    label: "IBM",
    icon: <BsCircleFill color={colors["IBM" as keyof Colors]} />,
  },
  {
    value: "MyTeam",
    label: "MyTeam",
    icon: <BsCircleFill color={colors["MyTeam" as keyof Colors]} />,
  },
];

const DashboardTable = ({ certificates }: Props) => {
  const [values, setValues] = useState("All");

  return (
    <div className="flex flex-col w-full max-h-[90%] DashboardTable">
      <div className="DashboardTable_Filters mb-3">
        <Select
          options={options}
          defaultValue={{
            value: "All",
            label: "All",
            icon: <BsCircleFill color="#ffffff" />,
          }}
          onChange={(values) => values && setValues(values.value)}
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
      <div className="overflow-y-auto overflow-x-hidden">
        {certificates.map((certificate, index) => (
          <CertificationRow
            key={`${certificate.id}`}
            certificate={certificate}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardTable;
