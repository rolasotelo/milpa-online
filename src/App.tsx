import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch,} from "react-router-dom";
import {WelcomePage, GamePage, CreateGamePage} from './pages'


interface Props {}

function App({}: Props): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/play/:gamecode" exact component={GamePage} />
        <Route
          path="/play"
          exact
          render={(props) => {
            return CreateGamePage(props);
          }}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
