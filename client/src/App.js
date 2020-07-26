import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import LogIn from "./pages/LogIn.js";
import Register from "./pages/Register.js";
import Dashboard from "./pages/Dashboard.js";
import Inventory from "./pages/Inventory.js";
import Listings from "./pages/Listings.js";
import "./App.css";

function App() {
  return (
 
    <Router>
       <Nav />
      <div id="wrapper">
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/listings" component={Listings} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
