import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-header">
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact>
            Musiques
          </NavLink>
        </li>
        <li>
          <NavLink to="/films" exact>
            Films
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
