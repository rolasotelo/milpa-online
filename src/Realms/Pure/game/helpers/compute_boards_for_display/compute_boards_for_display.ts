import { Players } from "../../../enums";
import { BoardForDisplay, Player } from "../../../types";

export const compute_boards_for_display = (
  players: Readonly<[Player, Player]>
): Readonly<
  [Readonly<BoardForDisplay> | undefined, Readonly<BoardForDisplay> | undefined]
> => {
  let yourMilpa: Readonly<BoardForDisplay> | undefined = undefined;
  let opponentsMilpa: Readonly<BoardForDisplay> | undefined = undefined;
  if (
    players &&
    players[Players.Opponent] &&
    players[Players.You].userID &&
    players[Players.Opponent].userID &&
    players[Players.You].gameStatus
  ) {
    yourMilpa = {
      isYourMilpa: true,
      board:
        players[Players.You].gameStatus?.boards[players[Players.You].userID!]!,
    };
    opponentsMilpa = {
      isYourMilpa: false,
      board:
        players[Players.You].gameStatus?.boards[
          players[Players.Opponent].userID!
        ]!,
    };
  }

  return [yourMilpa, opponentsMilpa];
};
