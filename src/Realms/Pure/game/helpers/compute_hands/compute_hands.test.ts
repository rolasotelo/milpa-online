import { compute_hands } from "..";
import { EMPTYGAMESTATUS, WAITING_PLAYER } from "../../../constants";
import { Player } from "../../../types";
import { Corn, Tlaloc } from "../../cards";

test("should return undefined when gameStaus is undefined", () => {
  const you: Readonly<Player> = {
    nickname: "Gabinka",
    self: true,
    connected: true,
  };
  const players: Readonly<[Player, Player]> = [
    { ...you },
    { ...WAITING_PLAYER },
  ];
  const { cropsHand, goodsHand } = compute_hands(players);
  expect(cropsHand).toBeUndefined();
  expect(goodsHand).toBeUndefined();
});

test("should return undefined when gamestaus is undefined", () => {
  const CROPSHAND = [{ ...Corn }];
  const GOODSHAND = [{ ...Tlaloc }];
  const you: Readonly<Player> = {
    nickname: "Gabinka",
    self: true,
    connected: true,
    gameStatus: {
      ...EMPTYGAMESTATUS,
      cropsHand: CROPSHAND,
      goodsHand: GOODSHAND,
    },
  };
  const players: Readonly<[Player, Player]> = [
    { ...you },
    { ...WAITING_PLAYER },
  ];
  const { cropsHand, goodsHand } = compute_hands(players);
  expect(cropsHand).toEqual(CROPSHAND);
  expect(goodsHand).toEqual(GOODSHAND);
});
