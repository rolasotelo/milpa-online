import React, { ReactElement } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import CreateOrJoinGame from "./Containers/CreateOrJoinGame/CreateOrJoinGame";
import TestContainer from "./Containers/TestConatiner/TestContainer";

interface Props {}

function App({}: Props): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <TestContainer name="🦙" />
        </Route>
        <Route
          path="/play"
          render={(props) => {
            return CreateOrJoinGame(props);
          }}
          exact
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
