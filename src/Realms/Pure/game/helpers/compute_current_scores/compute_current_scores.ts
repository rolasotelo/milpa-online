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
  const currentScoresMap = new Map(Object.entries(currentScoresObject!));
  const yourScore = currentScoresMap.get(players[Players.You].userID!);
  const opponentsScore = currentScoresMap.get(
    players[Players.Opponent].userID!
  );
  return [yourScore, opponentsScore];
};
