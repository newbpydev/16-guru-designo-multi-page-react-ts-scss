import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./Header.scss";

import logo from "../../assets/shared/desktop/logo-dark.png";
import hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import iconClose from "../../assets/shared/mobile/icon-close.svg";
import MainNavBar from "../navbar/MainNavBar";

//* COMPONENT: Header
export default function Header() {
  const [isToggleMenu, setIsToggleMenu] = useState(false);

  // output
  return (
    <header className="header">
      <NavLink to="/" className="header__logo-link">
        <img className="header__logo" src={logo} alt="Designo Logo" />
      </NavLink>

      <div className="header__navigation">
        {isToggleMenu ? (
          <>
            <img
              src={iconClose}
              alt="close menu"
              onClick={() => setIsToggleMenu((prev) => !prev)}
              className="header__icon-close"
            />
            <div
              className="header__nav-wrapper"
              onClick={() => setIsToggleMenu((prev) => !prev)}
            >
              <MainNavBar />
            </div>
          </>
        ) : (
          <img
            src={hamburger}
            alt="open menu"
            onClick={() => setIsToggleMenu((prev) => !prev)}
            className="header__hamburger"
          />
        )}
        {/* <img src={iconClose} alt="close menu" />
        <MainNavBar /> */}
      </div>
    </header>
  );
}
