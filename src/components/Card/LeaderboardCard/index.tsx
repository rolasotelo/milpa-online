import React from "react";
import Circle from "../Circle";
import Rectangle from "../Rectangle";

export default function Card(props: {
  position: number;
  score: number;
  nickname: string;
  date: string;
}) {
  const { position, score, nickname, date } = props;
  const background = (backgroundPosition: number): string => {
    if (backgroundPosition === 1) return "bg-card-gold";
    if (backgroundPosition > 1 && backgroundPosition < 6) return "bg-card-pink";
    return "bg-card-green";
  };

  return (
    <div
      className={`z-20 w-leaderboard-card ${
        position === 1 ? "mb-14 tablet:mb-0" : "mb-0"
      } h-leaderboard-card ${background(position)}`}
    >
      <Circle top={position.toString()} down={score.toString()} />
      <Rectangle title={nickname} subtitle={date} />
    </div>
  );
}
