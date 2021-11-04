import { Players } from "../../../enums";
import { Player, ScoringHistory } from "../../../types";

export const compute_history_board_for_display = (
  players: Readonly<[Player, Player]>
): Readonly<ScoringHistory[]> => {
  if (players && players[Players.You].gameStatus) {
    return players[Players.You].gameStatus?.scoringHistory!.slice()!.reverse()!;
  } else {
    return [];
  }
};
