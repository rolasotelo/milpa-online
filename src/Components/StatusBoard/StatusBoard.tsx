import React from "react";
import useGameContext from "../../Hooks/useGameContext/useGameContext";

interface Props {}

const StatusBoard = (props: Props) => {
  const context = useGameContext();
  const card = context.selectedCard.card;
  return (
    <div className="h-24 bg-mexicanBoneLight rounded-lg mt-1 mx-1 px-2">
      {card ? <p>{`${card.name}: ${card.rules}`}</p> : null}
    </div>
  );
};

export default StatusBoard;
