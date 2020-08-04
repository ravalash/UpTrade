import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import LogIn from "./pages/LogIn.js";
import Register from "./pages/Register.js";
import Dashboard from "./pages/Dashboard.js";
import Inventory from "./pages/Inventory.js";
import Listings from "./pages/Listings.js";
import AddInventory from "./components/AddInventory";
import MakeListing from "./components/MakeListing";
import MakeOffer from "./components/MakeOffer";
import ReviewOffer from "./components/ReviewOffer";
import "./App.css";

function App() {
  return (


    <Router>
      <Nav />
      <div>
        <AddInventory />
        <MakeListing />
        <MakeOffer />
        <ReviewOffer />
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
      </div>
    </Router>

  );
}

export default App;

// in terms of front end elements to build still, we still need:
// finalize the make a listing
// cancel a listing (simple as a button on the my listings box)
// make a trade offer (probably as a dropdown in the listings page or maybe also a modal)
// review & accept or reject a trade offer (probably a modal in the my listings box on the dashboard)
// a help page to explain stuff (that'd be real easy and feels like a good feature to have)
