import React, { createContext, useState } from "react";
import newSocket from "../../common/socket/socket";
import { GameRoutePropsType } from "../../common/types";

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
  let nicknameFromLocation: string = "";
  if (props.routerProps.location.state?.nickname) {
    nicknameFromLocation = props.routerProps.location.state.nickname;
  }
  const roomCodeFromLocation = props.routerProps.match.params.gamecode;

  const [nickname, setNickname] = useState(nicknameFromLocation);
  const [roomCode, setRoomCode] = useState(roomCodeFromLocation);
  const [socket, _] = useState(
    newSocket(roomCodeFromLocation, nicknameFromLocation)
  );
  const [idTimeout, setIdTimeout] = useState<undefined | NodeJS.Timeout>(
    undefined
  );

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
