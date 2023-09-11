import { NavLink } from "react-router-dom";
import "./MainNavBar.scss";

type Props = {};

//* COMPONENT: MainNavBar
export default function MainNavBar({}: Props) {
  // output
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li>
          <NavLink to="/about" className="navbar__link">
            Our Company
          </NavLink>
        </li>
        <li>
          <NavLink to="/locations" className="navbar__link">
            Locations
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navbar__link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
