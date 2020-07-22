import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard.js";
import Inventory from "./pages/Inventory.js";
import Listings from "./pages/Listings.js";
import SignIn from "./pages/SignIn.js";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div id="wrapper">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/inventory" component={Inventory} />
            <Route exact path="/listings" component={Listings} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
