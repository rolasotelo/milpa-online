import { Players } from "../../../enums";
import { Player } from "../../../types";

export const compute_is_your_turn = (
  players: Readonly<[Player, Player]>
): boolean | undefined => {
  let isYourTurn: boolean | undefined = undefined;
  if (!!players[Players.You].userID && !!players[Players.You].gameStatus) {
    isYourTurn =
      players[Players.You].userID ===
      players[Players.You].gameStatus!.playerInTurnID;
  }
  return isYourTurn;
};
