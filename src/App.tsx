import React, { ReactElement } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import CreateOrJoinGameProvider from "./Components/CreateOrJoinGameProvider/CreateOrJoinGameProvider";
import CreateOrJoinGame from "./Containers/CreateOrJoinGame/CreateOrJoinGame";
import WelcomePage from "./Containers/WelcomePage/WelcomePage";

interface Props {}

function App({}: Props): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/play" exact>
          <CreateOrJoinGameProvider>
            <CreateOrJoinGame />
          </CreateOrJoinGameProvider>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
