import { compute_can_interact_with_card } from "..";
import { CardType, SlotType } from "../../../enums";
import { AnyCard, BoardSlot, SelectedCard } from "../../../types";
import { Corn, EmptySlot, Manure } from "../../cards";

test("should return undefined if it's not your turn or any parameter in selected card is undefined", () => {
  const selectedCard: Readonly<SelectedCard> = {
    card: undefined,
    indexFromHand: undefined,
    type: undefined,
  };
  let isYourTurn: boolean | undefined = true;
  const canInteractWithCard = compute_can_interact_with_card(
    selectedCard,
    isYourTurn
  );
  const cardsInSlot: Readonly<BoardSlot> = {
    type: SlotType.Milpa,
    cards: [EmptySlot],
  };
  expect(canInteractWithCard(true, cardsInSlot)).toBeFalsy();
  const selectedCard2: Readonly<SelectedCard> = {
    card: Corn,
    type: CardType.Crop,
    indexFromHand: 1,
  };
  isYourTurn = undefined;
  const canInteractWithCard2 = compute_can_interact_with_card(
    selectedCard2,
    isYourTurn
  );
  expect(canInteractWithCard2(true, cardsInSlot)).toBeFalsy();
});

test("should return function that computes if a card can interact with an empty slot", () => {
  const selectedCard: Readonly<SelectedCard> = {
    card: Corn,
    indexFromHand: 1,
    type: CardType.Crop,
  };
  let isYourTurn: boolean | undefined = true;
  const canInteractWithCard = compute_can_interact_with_card(
    selectedCard,
    isYourTurn
  );
  const isYourMilpa = true;
  const cardsInSlot: Readonly<BoardSlot> = {
    type: SlotType.Milpa,
    cards: [EmptySlot],
  };
  const interaction1 = canInteractWithCard(isYourMilpa, cardsInSlot);
  expect(interaction1).toBeTruthy();
  const interaction2 = canInteractWithCard(!isYourMilpa, cardsInSlot);
  expect(interaction2).toBeFalsy();
});

test("should return function that computes if a card can interact with an non empty slot", () => {
  const selectedCard: Readonly<SelectedCard> = {
    card: Corn,
    indexFromHand: 1,
    type: CardType.Crop,
  };
  let isYourTurn: boolean | undefined = true;
  const canInteractWithCard = compute_can_interact_with_card(
    selectedCard,
    isYourTurn
  );
  const isYourMilpa = true;
  const cardsInSlot: Readonly<BoardSlot> = {
    type: SlotType.Milpa,
    cards: [Manure],
  };
  const interaction1 = canInteractWithCard(isYourMilpa, cardsInSlot);
  expect(interaction1).toBeTruthy();
  const interaction2 = canInteractWithCard(!isYourMilpa, cardsInSlot);
  expect(interaction2).toBeFalsy();
});
