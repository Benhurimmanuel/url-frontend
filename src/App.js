import React from "react";
import Register from "./register";
import Login from "./login";
import URL from "./url";
import Topbar from "./topbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "./welcome";

function App() {
  return (
    <>
      <Router>
        <Topbar></Topbar>
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <Welcome></Welcome>
            </Route>
            <Route path="/login" exact="true">
              <Login></Login>
            </Route>
            <Route path="/register" exact="true">
              <Register></Register>
            </Route>
            <Route path="/urlshortner/:id" exact="true">
              <URL></URL>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
