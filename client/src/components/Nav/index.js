import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <p className="navbar-brand">
        UPTRADE
      </p>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link className="nav-link" to="/">Dashboard</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/listings">Listings</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/inventory">My Inventory</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/signin">Sign Out</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
