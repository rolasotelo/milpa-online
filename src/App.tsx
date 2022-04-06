import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { WelcomePage, GamePage, CreateGamePage } from "./pages";

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/play/:gamecode" exact component={GamePage} />
        <Route path="/play" exact component={CreateGamePage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
