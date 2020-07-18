import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/books"]}>
          </Route>
          <Route exact path="/books/:id">
          </Route>
          <Route>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
