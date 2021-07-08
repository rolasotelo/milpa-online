import React, { ReactElement } from "react";
import { StaticContext } from "react-router";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import { GameRoutePropsType, RoutePropsType } from "./common/types";
import CreateOrJoinGameProvider from "./Components/CreateOrJoinGameProvider/CreateOrJoinGameProvider";
import GameProvider from "./Components/GameProvider/GameProvider";
import CreateOrJoinGame from "./Containers/CreateOrJoinGame/CreateOrJoinGame";
import Game from "./Containers/Game/Game";
import WelcomePage from "./Containers/WelcomePage/WelcomePage";

interface Props {}

function App({}: Props): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/play/:gamecode" exact component={GamePage} />
        <Route
          path="/play"
          exact
          render={(props) => {
            return CreateOrJoinGamePage(props);
          }}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

const CreateOrJoinGamePage = (routerProps: RoutePropsType) => {
  return (
    <CreateOrJoinGameProvider routerProps={routerProps}>
      <CreateOrJoinGame />
    </CreateOrJoinGameProvider>
  );
};

const GamePage = (routerProps: GameRoutePropsType) => {
  return (
    <GameProvider routerProps={routerProps}>
      <Game />
    </GameProvider>
  );
};

export default App;
