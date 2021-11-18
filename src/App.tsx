import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import CreateOrJoinGameProvider from "./Components/CreateOrJoinGameProvider/CreateOrJoinGameProvider";
import GameProvider from "./Components/GameProvider/GameProvider";
import CreateOrJoinGame from "./Containers/CreateOrJoinGame/CreateOrJoinGame";
import Game from "./Containers/Game/Game";
import { Welcome } from "./Containers/Welcome";
import WelcomePage from "./Containers/WelcomePage/WelcomePage";
import { GameRoutePropsType, RoutePropsType } from "./Realms/Pure/types";

interface Props {}

function App({}: Props): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/welcome" exact component={Welcome} />
        <Route path="/" exact component={WelcomePage} />
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
