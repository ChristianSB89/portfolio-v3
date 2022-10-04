import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/side-shot.png";
import HeaderSocial from "./HeaderSocial";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <img src={Logo} alt="csb logo" className="header_logo" />
        <h5>Hei, jeg heter</h5>
        <h1>Christian Sandum Breivik</h1>
        <h5 className="text-light">
          Front End Utvikler | Grafisk designer | Illustratør
        </h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
