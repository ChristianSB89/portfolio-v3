import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/side-shot.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hei, mitt navn er</h5>
        <h1>Christian Sandum Breivik</h1>
        <h5 className="text-light">
          Front End Utvikler | Grafisk designer | Illustratør
        </h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll helt ned
        </a>
      </div>
    </header>
  );
};

export default Header;
