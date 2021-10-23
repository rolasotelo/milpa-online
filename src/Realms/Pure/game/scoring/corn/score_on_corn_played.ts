import { Players } from "../../../enums";

export const CACAO_WHEN_CORN_PLAYED = 3;
export const score_on_corn_played = (
  oldScore: [number, number]
): [number, number] => {
  return [
    oldScore[Players.You] + CACAO_WHEN_CORN_PLAYED,
    oldScore[Players.Opponent],
  ];
};
