import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { GiCampCookingPot } from "react-icons/gi";
import { AiOutlineHolder } from "react-icons/ai";

const Navbar = () => {
  const [status, setStatus] = useState("close");

  return (
    <nav>
      <Link to="/">
        <div className="nav-logo-container">
          <AiOutlineHolder className="nav-logo" />
          <div>
            <h5 id="orange">Home</h5>
          </div>
        </div>
      </Link>
      <div>
        <GiCampCookingPot className="nav-logo2" />
      </div>

      {/* <div
        className="burgerMenu-container"
        role="button"
        onClick={() => setStatus(status === "open" ? "close" : "open")}
      >
        <i className={status} id="i" />
        <i className={status} id="i" />
        <i className={status} id="i" />
      </div> */}

      <div id="flex">
        <Link to="/">
          <img src={logo} alt="" className="app-logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
