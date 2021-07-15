import React, { createContext, useEffect, useState } from "react";
import newSocket from "../../common/socket/socket";
import { GameRoutePropsType, User, Users } from "../../common/types";

type GameContextType = {
  nickname: string | undefined;
  gameCode: string;
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
};

const GameProvider = (props: Props) => {
  let nickname: string | undefined = undefined;
  if (props.routerProps.location.state?.nickname) {
    nickname = props.routerProps.location.state.nickname;
  }

  const gameCode = props.routerProps.match.params.gamecode;
  const [players, setPlayers] = useState<Users>([]);

  useEffect(() => {
    const socket = newSocket(gameCode, nickname);
    socket.connect();
    socket.on("connect", () => {
      console.log("Connected to server");
    });
    socket.on("room join", (message) => {
      console.log(message);
    });
    socket.on("connect_error", (err) => {
      if (err.message === "invalid nickname") {
        console.log("nickname invalido");
      }
    });
    socket.on("users", (users: Users) => {
      users.forEach((user) => {
        user.self = user.userID === socket.id;
        initReactiveProperties(user);
      });
      // put the current player first, and sort by nickname
      const newPlayers = users.sort((a, b) => {
        if (a.self) return -1;
        if (b.self) return 1;
        if (a.nickname < b.nickname) return -1;
        return a.nickname > b.nickname ? 1 : 0;
      });
      setPlayers(newPlayers);
      console.log("new users", newPlayers);
    });
    return () => {
      socket.off("connect_error");
    };
  }, [props]);

  return (
    <GameContext.Provider value={{ nickname, gameCode }}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
