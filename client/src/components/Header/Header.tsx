import "./Header.css";
import Logo from "../Logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-content">
      <h1 className="header-title">Dashboard</h1>
      <Link to="/">
        <div className="w-20 hover:scale-105 ease-in-out duration-300">
          <Logo color={false} />
        </div>
      </Link>
    </div>
  );
};

export default Header;
