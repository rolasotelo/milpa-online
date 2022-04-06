import React, { createContext, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Card from "@rolasotelo/milpa-ruleset/dist/classes/cards/Card";
import newSocket from "../../common/socket/socket";
import useMatch from "./useMatch";
import { ScoringHistory } from "../../common/types";

export type GameContextType = {
  nickname: string;
  history: readonly ScoringHistory[];
  isGameOngoing: boolean;
  roomCode: string;
  localNickname: string;
  remoteNickname: string;
  cropsHand: Card[];
  goodsHand: Card[];
  selectedCard: Card | null;
  onClickCard: (type: "crop" | "good", index: number) => void;
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

  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const [socket] = useState(newSocket(roomCodeFromProps, realNickname));

  const {
    nickname,
    isGameOngoing,
    roomCode,
    localNickname,
    remoteNickname,
    cropsHand,
    goodsHand,
  } = useMatch(roomCodeFromProps, nicknameFromProps, socket);

  function onClickCard(type: "crop" | "good", index: number) {
    if (type === "crop") setSelectedCard(cropsHand[index]);
    if (type === "good") setSelectedCard(goodsHand[index]);
  }

  const history: readonly ScoringHistory[] = useMemo(() => [], []);

  const context = useMemo(
    () => ({
      nickname,
      history,
      isGameOngoing,
      roomCode,
      localNickname,
      remoteNickname,
      cropsHand,
      goodsHand,
      selectedCard,
      onClickCard,
    }),
    [
      cropsHand,
      goodsHand,
      roomCode,
      isGameOngoing,
      nickname,
      history,
      localNickname,
      remoteNickname,
      selectedCard,
    ]
  );

  return (
    <GameContext.Provider value={context}>{children}</GameContext.Provider>
  );
}
