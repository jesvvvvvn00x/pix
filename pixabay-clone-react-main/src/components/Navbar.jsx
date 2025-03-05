import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/pixabay.png"; // Import logo

const Navbar = () => {
  return (
    <div className="w-full bg-white flex items-center h-16 px-4"> 
      <Link to="/" className="no-underline text-inherit flex items-center">
        <img src={logo} alt="Pixabay Logo" className="h-12 mr-2" />
      </Link>
    </div>
  );
};

export default Navbar;
