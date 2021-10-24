import { partition } from "underscore";

export interface DealHandReturnType<T> {
  hand: ReadonlyArray<T>;
  deck: ReadonlyArray<T>;
}

export const deal_hand = <T>(
  deck: ReadonlyArray<T>,
  handSize: number
): DealHandReturnType<T> => {
  const [hand, newDeck] = partition(deck, (card, index) => {
    return index < handSize;
  });
  return {
    hand,
    deck: newDeck,
  };
};
