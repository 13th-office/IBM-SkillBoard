import "./Header.css";
import Logo from "../Logo";
import { Link } from "react-router-dom";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <div className="header-content">
      <h1 className="header-title">{title}</h1>
      <Link to="/">
        <div className="w-20 hover:scale-105 ease-in-out duration-300">
          <Logo color={false} />
        </div>
      </Link>
    </div>
  );
};

export default Header;
