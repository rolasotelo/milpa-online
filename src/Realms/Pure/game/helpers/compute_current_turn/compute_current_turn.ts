import { Players } from "../../../enums";
import { Player } from "../../../types";

export const compute_current_turn = (
  players: Readonly<[Player, Player]>
): number | undefined => {
  let currentTurn: number | undefined = undefined;
  if (!!players[Players.You].gameStatus) {
    currentTurn = players[Players.You].gameStatus!.currentTurn;
  }
  return currentTurn;
};
