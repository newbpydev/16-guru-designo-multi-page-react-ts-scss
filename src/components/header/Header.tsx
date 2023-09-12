// import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./Header.scss";

// import logo from "../../assets/shared/desktop/logo-dark.png";
// import hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
// import iconClose from "../../assets/shared/mobile/icon-close.svg";
import MainNavBar from "../navbar/MainNavBar";
import Logo from "../ui/Logo";

//* COMPONENT: Header
export default function Header() {
  const [isToggleMenu, setIsToggleMenu] = useState(false);

  const hamburger = "assets/shared/mobile/icon-hamburger.svg";
  const iconClose = "assets/shared/mobile/icon-close.svg";

  // output
  return (
    <header className="header">
      <Logo isDarkMode={false} onClick={() => setIsToggleMenu(false)} />
      {/* <NavLink to="/" className="header__logo-link">
        <img
          className="header__logo"
          src={logo}
          alt="Designo Logo"
          onClick={() => setIsToggleMenu(() => false)}
        />
      </NavLink> */}

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
              <MainNavBar isFooter={false} />
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
