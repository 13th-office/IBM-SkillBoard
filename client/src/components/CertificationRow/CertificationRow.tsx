import { Category, Certificate } from "../../../lib/types";
import "./CertificationRow.css";
import { BsCircleFill } from "react-icons/bs";
interface Props {
  certificate: Certificate;
  categories: Category[];
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

const CertificationRow = ({ certificate, categories }: Props) => {
  return (
    <div className="certification-row-general drop-shadow-md hover:scale-105 ease-in-out duration-150">
      <div>
        <BsCircleFill color={colors[certificate.type as keyof Colors]} />
      </div>

      <p className="certification-row-name font-medium">{certificate.name}</p>

      <p>{certificate.type}</p>

      <ul>
        {categories.map((item, i) => {
          return (
            <li key={i} className="certification-row-name">
              - {item.name}
            </li>
          );
        })}
      </ul>

      <p>{Math.floor(Math.random() * 100)}%</p>
    </div>
  );
};

export default CertificationRow;
