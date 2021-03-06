import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GameContext from "./utils/GameContext";
import Nav from "./components/Nav";
import { LogIn } from "./pages/LogIn.js";
import Register from "./pages/Register.js";
import Dashboard from "./pages/Dashboard.js";
import Inventory from "./pages/Inventory.js";
import Listings from "./pages/Listings.js";
import LogOut from "./pages/Logout"
import Help from "./pages/Help.js";
import AddInventory from "./components/AddInventory";
import MakeListing from "./components/MakeListing";
import MyListings from "./pages/MyListings";
import MakeOffer from "./components/MakeOffer";
import ReviewOffer from "./components/ReviewOffer";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import "./App.css";

function App() {
  const [GameState, setGameState] = useState({
    selectedListingGame: "",
    newOfferGame: "",
    reviewOfferListing:""
  });

  function chooseTrade(event) {
    event.preventDefault();
    setGameState({ selectedListingGame: event.target.getAttribute("data-id") });
  }

  function newOffer(event) {
    event.preventDefault();
    console.log(event.target);
    setGameState({ newOfferGame: event.target.getAttribute("data-id") });
  }

  function reviewOffer(event) {
    event.preventDefault();
    console.log(event.target);
    setGameState({ reviewOfferListing: event.target.getAttribute("data-id") });
  }

  useEffect(() => {
    console.log('GameState changed');
    console.log(GameState);
  }, [GameState]);

  console.log(GameState);

  return (
    <Router>
      <GameContext.Provider value={GameState}>
        <Nav />
        <AddInventory />
        <MakeListing />
        <MakeOffer />
        <ReviewOffer />
        <div id="wrapper">
          <Switch>
            <Route exact path="/" component={LogIn} />
            <Route exact path="/logout" component={LogOut} />
            <Route exact path="/register" component={Register} />
            {/* <Route exact path="/register" render={() => true ? <LogIn/> : <Register/>} /> */}
            <Route
              exact
              path="/dashboard"
              render={(props) => <Dashboard {...props} />}
            />
            <Route
              exact
              path="/inventory"
              render={() => <Inventory chooseTrade={chooseTrade} />}
            />
            <Route
              exact
              path="/listings"
              render={() => <Listings newOffer={newOffer} />}
            />
            {/* <Route exact path="/listings" component={Listings} /> */}
            <Route exact path="/mylistings" render={() => <MyListings reviewOffer={reviewOffer} />}/>
            <Route exact path="/faq" component={Help} />
          </Switch>
          <NotificationContainer />
        </div>
      </GameContext.Provider>
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
