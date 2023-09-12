import "./Logo.scss";
import { HTMLAttributes } from "react";

import lightLogo from "../../assets/shared/desktop/logo-light.png";
import darkLogo from "../../assets/shared/desktop/logo-dark.png";
import { NavLink } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  isDarkMode: boolean;
}

//* COMPONENT: Logo
export default function Logo({ isDarkMode, ...rest }: Props) {
  // output
  return (
    <NavLink to="/" className="logo" {...rest}>
      <img src={isDarkMode ? lightLogo : darkLogo} alt="Designo Logo" />
    </NavLink>
  );
}
