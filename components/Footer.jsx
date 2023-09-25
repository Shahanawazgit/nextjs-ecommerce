import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>&copy; 2023 SP Headphoners All rights reserved!</p>
      <p className="icons">
        <AiFillLinkedin />
        <AiOutlineGithub />
      </p>
    </div>
  );
};

export default Footer;
