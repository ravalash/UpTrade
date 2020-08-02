import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GameContext from "./utils/GameContext";
import Nav from "./components/Nav";
import LogIn from "./pages/LogIn.js";
import Register from "./pages/Register.js";
import Dashboard from "./pages/Dashboard.js";
import Inventory from "./pages/Inventory.js";
import Listings from "./pages/Listings.js";
import AddInventory from "./components/AddInventory";
import MakeListing from "./components/MakeListing"
import MyListings from './pages/MyListings';
import "./App.css";

function App() {

  const [GameState, setGameState] = useState({
    selectedGame: "testest"
  });

  function chooseTrade(event) {
    event.preventDefault()
    setGameState(event.target)
    console.log(GameState)
  }

  return (
    <Router>
      <GameContext.Provider value={GameState}>
        <Nav />
        <AddInventory />
        <MakeListing />
        <div id="wrapper">
          <Switch>
            <Route exact path="/" component={LogIn} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" render={(props) => <Dashboard {...props} />} />
            <Route exact path="/inventory" render={() => <Inventory chooseTrade={chooseTrade} />} />
            <Route exact path="/listings" component={Listings} />
            <Route exact path="/mylistings" component={MyListings} />

          </Switch>
        </div>
      </GameContext.Provider>
    </Router>
  );
}

export default App;
