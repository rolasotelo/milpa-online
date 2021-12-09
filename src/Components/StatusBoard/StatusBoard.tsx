import React from "react";
import useGameContext from "../../Hooks/useGameContext/useGameContext";

interface Props {}

function StatusBoard(props: Props) {
  const context = useGameContext();
  const card = context.selectedCard.card;
  const rules = card ? `${card.name}: ${card.rules}` : "";
  return (
    <div className="h-24 bg-mexicanBoneLight rounded-lg mt-1 mx-1 px-2">
      {rules}
    </div>
  );
}

export default StatusBoard;
