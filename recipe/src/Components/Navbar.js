import React, { useState } from "react";
// import { CgMathPlus } from "react-icons/cg";
// import { FiPlus } from "react-icons/fi";
// import { RiCloseFill } from "react-icons/ri";
// import { AiOutlineSearch } from "react-icons/ai";
import logo from "../Assets/logo.png";

import NavLinks from "./NavLinks";

const Navbar = () => {
  const [status, setStatus] = useState("close");

  // const hamburgerIcon = (
  //   <FiPlus
  //     className="hamburger"
  //     id="hamburger-icon-open"
  //     onClick={() => setOpen(!open)}
  //   />
  // );
  // const closeIcon = (
  //   <RiCloseFill
  //     className="hamburger"
  //     id="hamburger-icon-close"
  //     onClick={() => setOpen(!open)}
  //   />
  // );

  // const closeMobileMenu = () => setOpen(false);

  return (
    <nav>
      {/* <div> */}
      {/* {open ? closeIcon : hamburgerIcon}
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />} */}
      {/* </div> */}

      <div
        className="burgerMenu-container"
        role="button"
        onClick={() => setStatus(status === "open" ? "close" : "open")}
      >
        <i className={status} id="i" />
        <i className={status} id="i" />
        <i className={status} id="i" />
      </div>

      <div id="flex">
        <img src={logo} alt="" className="app-logo" />
      </div>
    </nav>
  );
};

export default Navbar;
