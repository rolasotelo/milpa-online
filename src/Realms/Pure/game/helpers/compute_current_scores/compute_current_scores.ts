import { Players } from "../../../enums";
import { Player } from "../../../types";

export const compute_current_scores = (
  players: Readonly<[Player, Player]>
): [number | undefined, number | undefined] => {
  let currentScoresObject:
    | undefined
    | {
        [k: string]: number;
      } = undefined;
  if (!!players[Players.You].gameStatus) {
    currentScoresObject = players[Players.You].gameStatus!.score;
  }
  let yourScore;
  let opponentsScore;
  if (currentScoresObject) {
    const currentScoresMap = new Map(Object.entries(currentScoresObject));
    yourScore = currentScoresMap.get(players[Players.You].userID!);
    opponentsScore = currentScoresMap.get(players[Players.Opponent].userID!);
  }

  return [yourScore, opponentsScore];
};
