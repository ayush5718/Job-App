import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Aayush</div>
      <div>
        <Link
          to={"https://www.facebook.com/profile.php?id=100023033733415"}
          target="_blank"
        >
          <FaFacebookF />
        </Link>
        <Link to={"/"}>
          <FaYoutube />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/aayush-kumar-3880ab22a/"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link
          to={"https://www.instagram.com/ayushbhardwaj.2602/"}
          target="_blank"
        >
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
