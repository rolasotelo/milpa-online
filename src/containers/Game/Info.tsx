import React from "react";
import useGameContext from "../../providers/GameProvider/useGameContext";
import Circle from "../../components/Card/Circle";

export default function Info() {
  const { selectedCard } = useGameContext();
  return (
    <div className="h-80 tablet:h-milpa w-64 bg-yellow-600">
      {selectedCard?.name}
      {selectedCard && (
        <Circle
          top={selectedCard.icon}
          down={`+ ${selectedCard.rule} 🍫`}
          size="1.5rem"
          height="h-20"
        />
      )}
    </div>
  );
}
