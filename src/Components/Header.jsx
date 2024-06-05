import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import "../App.css";
import AboutMe from "./AboutMe";

const Header = () => {
  return (
    <header>
      <div className="header-image">
        <AboutMe></AboutMe>
      </div>
    </header>
  );
};

export default Header;
