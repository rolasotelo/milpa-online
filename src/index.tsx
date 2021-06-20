import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import App from "./App";
import CreateOrJoinGame from "./Containers/CreateOrJoinGame/CreateOrJoinGame";
import "./styles.css";

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/">
        <App name="🦙" />
      </Route>
      <Route path="/play">
        <CreateOrJoinGame />
      </Route>
      <Redirect to="/" />
    </Switch>
  </Router>,

  mountNode
);
