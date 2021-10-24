import { Players } from "../../../enums";
import { Crop, Good, Player } from "../../../types";

export const compute_hands = (
  players: Readonly<[Player, Player]>
): {
  cropsHand: ReadonlyArray<Crop> | undefined;
  goodsHand: ReadonlyArray<Good> | undefined;
} => {
  let cropsHand: ReadonlyArray<Crop> | undefined = undefined;
  let goodsHand: ReadonlyArray<Good> | undefined = undefined;

  if (players && players[Players.You].gameStatus) {
    cropsHand = players[Players.You]!.gameStatus!.cropsHand;
    goodsHand = players[Players.You]!.gameStatus!.goodsHand;
  }
  return { cropsHand, goodsHand };
};
