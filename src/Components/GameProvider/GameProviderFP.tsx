import React, { createContext, useMemo, useState } from "react";
import newSocket from "../../common/socket/socket";
import { GameRoutePropsType } from "../../common/types";
import { compute_current_stage } from "../../Realms/Pure/game/helpers/compute_current_stage/compute_current_stage";
import { compute_current_turn } from "../../Realms/Pure/game/helpers/compute_current_turn/compute_current_turn";
import { compute_is_your_turn } from "../../Realms/Pure/game/helpers/compute_is_your_turn/compute_is_your_turn";
import { create_players } from "../../Realms/Pure/game/helpers/create_players/create_players";
import { Player, SelectedCard } from "../../Realms/Pure/types";

export type GameContextType = {
  nickname: string;
  roomCode: string;
  isGameOngoing: boolean;
  isYourTurn: boolean | undefined;
  selectedCard: Readonly<SelectedCard>;
  currentTurn: number | undefined;
  currentStage: number | undefined;
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
  const you = {
    nickname: realNickname,
    self: true,
    connected: true,
  };
  const noSelectedCard = {
    card: undefined,
    indexFromHand: undefined,
  };

  const [idTimeout, setIdTimeout] = useState<undefined | NodeJS.Timeout>(
    undefined
  );

  const [nickname, setNickname] = useState(realNickname);
  const [roomCode, setRoomCode] = useState(roomCodeFromProps);
  // TODO test newSocket
  const [socket, _] = useState(newSocket(roomCodeFromProps, realNickname));
  const [isGameOngoing, setIsGameOngoing] = useState(false);
  const [players, setPlayers] = useState<Readonly<[Player, Player]>>(
    create_players(you)
  );
  const [selectedCard, setSelectedCard] =
    useState<Readonly<SelectedCard>>(noSelectedCard);

  const isYourTurn = useMemo(() => compute_is_your_turn(players), [players]);
  const currentTurn = useMemo(() => compute_current_turn(players), [players]);
  const currentStage = useMemo(() => compute_current_stage(players), [players]);

  return (
    <GameContext.Provider
      value={{
        nickname,
        roomCode,
        isGameOngoing,
        isYourTurn,
        selectedCard,
        currentStage,
        currentTurn,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
