import React from "react";
// import { motion } from "framer-motion";

const NavLinks = (props) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <ul
      className="container"
      variants={container}
    >
      <li onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        {/* <a href="#about-container">About</a> */}
      </li>

      <li onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        {/* <a href="#experience-container">Experience</a> */}
      </li>

      <li onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        {/* <a href="#project-container">Projects</a> */}
      </li>

      <li onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        {/* <a href="#contact-container">Contact</a> */}
      </li>
    </ul>
  );
};

export default NavLinks;
