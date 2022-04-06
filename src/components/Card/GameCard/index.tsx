import React, { MouseEventHandler } from "react";
import Circle from "../Circle";
import Rectangle from "../Rectangle";

export default function GameCard(props: {
  score: string;
  name: string;
  short: string;
  icon: string;
  color: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const { score, name, icon, short, color, onClick } = props;

  return (
    <button type="button" onClick={onClick}>
      <div
        className={`flex flex-col justify-between pb-1 w-16 h-16 bg-milpaPink-dark tablet:bg-transparent tablet:w-leaderboard-card-small tablet:h-leaderboard-card-small tablet:bg-card-${color}`}
      >
        <Circle top={icon} down={`+ ${score} 🍫`} size="1.5rem" height="h-20" />
        <Rectangle title={name} subtitle={short} size="0.9rem" />
      </div>
    </button>
  );
}
