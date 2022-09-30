import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/chris-sabre/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ChristianSB89" target="_blank">
        <FaGithubSquare />
      </a>
      <a href="https://twitter.com/ChrisSanBrei" target="_blank">
        <FaTwitterSquare />
      </a>
    </div>
  );
};

export default HeaderSocial;
