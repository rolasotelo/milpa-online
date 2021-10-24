import { deal_hand } from "..";
import { CROPS_HAND_SIZE } from "../../../constants";
import { Beans, Corn } from "../../cards";

test("should return hand of right size and deck returned must be consistent", () => {
  const deck = [
    { ...Corn },
    { ...Beans },
    { ...Corn },
    { ...Beans },
    { ...Corn },
    { ...Beans },
  ];
  const { deck: newDeck, hand } = deal_hand(deck, CROPS_HAND_SIZE);
  expect(hand).toEqual([{ ...Corn }, { ...Beans }, { ...Corn }, { ...Beans }]);
  expect(newDeck).toEqual([{ ...Corn }, { ...Beans }]);
});

test("should return ramining cards if not enough cards are left", () => {
  const deck = [{ ...Corn }, { ...Beans }];
  const { deck: newDeck, hand } = deal_hand(deck, CROPS_HAND_SIZE);
  expect(hand).toEqual([{ ...Corn }, { ...Beans }]);
  expect(newDeck).toEqual([]);
});
