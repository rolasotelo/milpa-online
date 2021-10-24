import { Players } from "../../../enums";
import { Player } from "../../../types";

export const compute_current_stage = (
  players: Readonly<[Player, Player]>
): number | undefined => {
  let currentStage: number | undefined = undefined;
  if (!!players[Players.You].gameStatus) {
    currentStage = players[Players.You].gameStatus!.currentStage;
  }
  return currentStage;
};
