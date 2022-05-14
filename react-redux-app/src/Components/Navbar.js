import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success  py-2">
      <Link to="/" className="navbar-brand ml-5">
        React Redux App!!
      </Link>
    </nav>
  );
};

export default Navbar;
