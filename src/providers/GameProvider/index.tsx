import React, { createContext, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import newSocket from "../../common/socket/socket";
import useMatch from "./useMatch";
import { ScoringHistory } from "../../common/types";

export type GameContextType = {
  nickname: string;
  history: readonly ScoringHistory[];
};

export const GameContext = createContext<GameContextType>(null!);

interface Props {
  children: JSX.Element;
}

export function GameProvider(props: Props) {
  const { children } = props;
  const location = useLocation<{ nickname: string }>();
  const params = useParams<{ gamecode: string }>();
  const nicknameFromProps = location.state?.nickname;
  const realNickname = nicknameFromProps || "";
  const roomCodeFromProps = params.gamecode;

  const [socket] = useState(newSocket(roomCodeFromProps, realNickname));

  const { nickname } = useMatch(roomCodeFromProps, nicknameFromProps, socket);

  const history: readonly ScoringHistory[] = useMemo(() => [], []);

  const context = useMemo(
    () => ({
      nickname,
      history,
    }),
    [nickname, history]
  );

  return (
    <GameContext.Provider value={context}>{children}</GameContext.Provider>
  );
}
