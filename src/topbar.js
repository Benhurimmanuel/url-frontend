import React from "react";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark text-white topbar">
        <Link className="navbar-brand link" to="/">
          Home
        </Link>
      </nav>
    </>
  );
}

export default Topbar;
