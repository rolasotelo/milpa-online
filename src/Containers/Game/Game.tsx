import React from "react";
import Board from "../../Components/Board/Board";
import LayoutGame from "../../Components/LayoutGame/LayoutGame";
import WaitingModal from "../../Components/WaitingModal/WaitingModal";
import useGameContext from "../../Hooks/useGameContext/useGameContext";

interface Props {}

const Game = (props: Props) => {
  const context = useGameContext();
  const players = {
    local: context.nickname,
    remote: context.opponentsNickname,
  };

  return (
    <LayoutGame players={players} yourTurn={!!context.isYourTurn}>
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
