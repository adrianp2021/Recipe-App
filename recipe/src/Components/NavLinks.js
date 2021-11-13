import React from "react";
// import { motion } from "framer-motion";


// REQUIRES FURTHER WORK

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
    <ul className="container" variants={container}>
      <li
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      ></li>

      <li
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      ></li>

      <li
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      ></li>

      <li
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      ></li>
    </ul>
  );
};

export default NavLinks;
