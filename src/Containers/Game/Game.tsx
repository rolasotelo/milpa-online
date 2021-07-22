import React from "react";
import LayoutGame from "../../Components/LayoutGame/LayoutGame";
import WaitingModal from "../../Components/WaitingModal/WaitingModal";
import useGameContext from "../../Hooks/useGameContext/useGameContext";

interface Props {}

const Game = (props: Props) => {
  const context = useGameContext();
  return (
    <LayoutGame>
      <WaitingModal
        title={`Ahoj ${context.nickname}`}
        body="Share this code with your friend"
        buttonText={context.gameCode}
      />
    </LayoutGame>
  );
};

export default Game;
