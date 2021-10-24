import React from "react";
import Board from "../../Components/Board/Board";
import LayoutGame from "../../Components/LayoutGame/LayoutGame";
import WaitingModal from "../../Components/WaitingModal/WaitingModal";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import { Players } from "../../Realms/Pure/enums";

interface Props {}

const Game = (props: Props) => {
  const context = useGameContext();
  const players = {
    local: context.nickname,
    remote: context.opponentsNickname,
  };

  const yourScore = context.scores[Players.You]
    ? context.scores[Players.You]!.toString()
    : "...";

  const opponentsScore = context.scores[Players.You]
    ? context.scores[Players.Opponent]!.toString()
    : "...";

  return (
    <LayoutGame
      players={players}
      scores={[yourScore, opponentsScore]}
      yourTurn={!!context.isYourTurn}
    >
      {!context.isGameOngoing && (
        <WaitingModal
          title={`Ahoj ${context.nickname}`}
          body="Share this code with your friend"
          buttonText={context.roomCode}
        />
      )}
      <Board />
    </LayoutGame>
  );
};

export default Game;
