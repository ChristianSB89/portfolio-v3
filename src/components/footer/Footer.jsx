import React from "react";
import "./footer.css";
import { ImSoundcloud2 } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="CSB" className="footer_logo" />
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://soundcloud.com/krespatex-miller" target="_blank">
          <ImSoundcloud2 />
        </a>
        <a
          href="https://www.youtube.com/channel/UCPgLKJdt5ja35Y9hA1UAbJg"
          target="_blank"
        >
          <BsYoutube />
        </a>
        <a href="https://twitter.com/ChrisSanBrei" target="_blank">
          <FaTwitterSquare />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Christian Sandum Breivik All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
