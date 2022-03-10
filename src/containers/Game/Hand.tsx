import React from "react";
import useGameContext from "../../providers/GameProvider/useGameContext";
import Card from "../../components/Card/GameCard";

function CardPlaceholder() {
  return (
    <div className="tablet:w-leaderboard-card-small tablet:h-leaderboard-card-small">
      {" "}
      1/16
    </div>
  );
}

export default function Hand() {
  const { cropsHand, goodsHand } = useGameContext();
  return (
    <div className="fixed tablet:static right-0 top-20 flex flex-col-reverse tablet:flex-row justify-between items-center w-20 tablet:w-full p-1 tablet:p-3 bg-milpaPink-light h-mountains tablet:h-44">
      {cropsHand.map((card) => (
        <Card
          score={card.rule}
          name={card.name}
          short={card.short}
          icon={card.icon}
          color="green"
        />
      ))}
      {goodsHand.map((card) => (
        <Card
          score={card.rule}
          name={card.name}
          short={card.short}
          icon={card.icon}
          color="pink"
        />
      ))}
      <CardPlaceholder />
    </div>
  );
}
