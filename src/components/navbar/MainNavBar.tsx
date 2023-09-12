import { NavLink } from "react-router-dom";
import "./MainNavBar.scss";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLMenuElement> {
  isFooter: boolean;
}

//* COMPONENT: MainNavBar
export default function MainNavBar({ isFooter, ...rest }: Props) {
  // output
  return (
    <nav className={isFooter ? "navbar-footer" : "navbar"} {...rest}>
      <ul className={`${isFooter ? "navbar-footer" : "navbar"}__links`}>
        <li>
          <NavLink
            to="/about"
            className={`${isFooter ? "navbar-footer" : "navbar"}__link`}
          >
            Our Company
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/locations"
            className={`${isFooter ? "navbar-footer" : "navbar"}__link`}
          >
            Locations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={`${isFooter ? "navbar-footer" : "navbar"}__link`}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
