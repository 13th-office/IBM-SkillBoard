import "./Header.css";
import Logo from "../Logo";

const Header = () => {
  return (
    <div className="header-content">
      <h1 className="header-title">Dashboard</h1>
      <div className="w-28">
        <Logo color={false} />
      </div>
    </div>
  );
};

export default Header;
