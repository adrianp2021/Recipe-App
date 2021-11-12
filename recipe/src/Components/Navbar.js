// import { motion } from "framer-motion";
import React, { useState } from "react";
// import { CgMathPlus } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
// import { AiOutlineSearch } from "react-icons/ai";

import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <FiPlus
      className="hamburger"
      id="hamburger-icon-open"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <RiCloseFill
      className="hamburger"
      id="hamburger-icon-close"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="MobileNavigation">
      {/* <div> */}
        {open ? closeIcon : hamburgerIcon}
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
      {/* </div> */}
      {/* <div>
        <AiOutlineSearch className="search"/>
      </div> */}
    </nav>
  );
};

export default Navbar;
