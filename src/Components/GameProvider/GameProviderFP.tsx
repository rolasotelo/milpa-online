import React, { createContext, useState } from "react";
import newSocket from "../../common/socket/socket";
import { GameRoutePropsType } from "../../common/types";
import { Player } from "../../Realms/Pure/types";

export type GameContextType = {
  nickname: string;
  roomCode: string;
};

export const GameContext = createContext<GameContextType>(null!);

interface Props {
  children: JSX.Element;
  routerProps: GameRoutePropsType;
}

const GameProvider = (props: Props) => {
  const nicknameFromProps = props.routerProps.location.state.nickname;
  const realNickname = nicknameFromProps ? nicknameFromProps : "";
  const roomCodeFromProps = props.routerProps.match.params.gamecode;

  const [idTimeout, setIdTimeout] = useState<undefined | NodeJS.Timeout>(
    undefined
  );

  const [nickname, setNickname] = useState(realNickname);
  const [roomCode, setRoomCode] = useState(roomCodeFromProps);
  // TODO test newSocket
  const [socket, _] = useState(newSocket(roomCodeFromProps, realNickname));
  const [players, setPlayers] = useState<Readonly<[Player, Player]>>();

  return (
    <GameContext.Provider
      value={{
        nickname,
        roomCode,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
