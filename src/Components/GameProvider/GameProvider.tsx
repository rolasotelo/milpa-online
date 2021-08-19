import React, { createContext, useEffect, useState } from "react";
import newSocket from "../../common/socket/socket";
import { GameRoutePropsType, User, Users } from "../../common/types";

type GameContextType = {
  nickname: string | undefined;
  gameCode: string;
  players: Users;
  isPlaying: boolean;
};

export const GameContext = createContext<GameContextType>(null!);

interface Props {
  children: JSX.Element;
  routerProps: GameRoutePropsType;
}

const initReactiveProperties = (user: User) => {
  user.connected = true;
  user.messages = [];
  user.hasNewMessages = false;
  user.self = false;
};

const GameProvider = (props: Props) => {
  let nickname: string = "";
  if (props.routerProps.location.state?.nickname) {
    nickname = props.routerProps.location.state.nickname;
  }
  const gameCode = props.routerProps.match.params.gamecode;

  const [players, setPlayers] = useState<Users>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [socket, _] = useState(newSocket(gameCode, nickname));

  // * only supposed to run once, at the beginning
  useEffect(() => {
    socket.connect();
    socket.on("connect_error", (err) => {
      // TODO handle connection error
      if (err.message === "invalid nickname") {
        console.log("nickname invalido");
      }
    });

    socket.on("room filled", () => {
      // TODO do proper workflow when room filled
      props.routerProps.history.push("/play", { nickname });
    });

    socket.on("start game", () => {
      setIsPlaying(true);
    });

    // + existing users in room
    socket.on("users", (users: Users) => {
      users.forEach((user) => {
        initReactiveProperties(user);

        user.self = user.userID === socket.id;
      });
      const newPlayers = users.sort((a, b) => {
        if (a.self) return -1;
        if (b.self) return 1;
        if (a.nickname < b.nickname) return -1;
        return a.nickname > b.nickname ? 1 : 0;
      });
      setPlayers(newPlayers);
    });

    socket.once("user connected", (user: User) => {
      console.log("hola");
      initReactiveProperties(user);
      const newPlayers = [...players];
      newPlayers.push(user);
      setPlayers(newPlayers);
    });

    return () => {
      socket.off("connect_error");
    };
  }, [props]);

  // * every time players update a new "user connected" listener is needed
  useEffect(() => {
    // TODO look at the mess that is players updating because setPlayers here

    socket.on("user connected", (user: User) => {
      initReactiveProperties(user);
      console.log("players", players);
      const newPlayers = [...[players[0]]];
      newPlayers.push(user);
      setPlayers(newPlayers);
    });

    return () => {};
  }, [players]);

  return (
    <GameContext.Provider value={{ nickname, gameCode, players, isPlaying }}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
