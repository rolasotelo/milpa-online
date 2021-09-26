import React from "react";
import Board from "../../Components/Board/Board";
import LayoutGame from "../../Components/LayoutGame/LayoutGame";
import WaitingModal from "../../Components/WaitingModal/WaitingModal";
import useGameContext from "../../Hooks/useGameContext/useGameContext";

interface Props {}

const Game = (props: Props) => {
  const context = useGameContext();
  const players = {
    local: context.players[0]?.nickname,
    remote: context.players[1] ? context.players[1]?.nickname : "",
  };

  return (
    <LayoutGame players={players} yourTurn={context.isYourTurn}>
      {!context.isPlaying && (
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
