import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  function isActive(value) {
    let page = useLocation().pathname
    // console.log(page)
    return 'nav-item ' + ((value === page) ? 'active' : '')
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <p className="navbar-brand">
        UPTRADE
      </p>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className={isActive("/dashboard")}>
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
          <li className={isActive("/listings")}>
            <Link className="nav-link" to="/listings">Listings</Link>
          </li>
          <li className={isActive("/inventory")}>
            <Link className="nav-link" to="/inventory">My Inventory</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Sign Out</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
