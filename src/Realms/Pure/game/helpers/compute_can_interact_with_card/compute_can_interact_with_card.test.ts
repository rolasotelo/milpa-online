import { compute_can_interact_with_card } from "..";
import { TOTAL_TURNS } from "../../../constants";
import { CardType, Column, Row, SlotType } from "../../../enums";
import { BoardSlot, SelectedCard } from "../../../types";
import { Corn, EmptySlot, Huitlacoche, Manure, Shovel } from "../../cards";

test("should return false if it's not your turn or it's beyond max turns or any parameter in selected card is undefined", () => {
  const selectedCard: Readonly<SelectedCard> = {
    card: undefined,
    indexFromHand: undefined,
    type: undefined,
  };
  let isYourTurn: boolean | undefined = true;

  const canInteractWithCard = compute_can_interact_with_card(
    selectedCard,
    isYourTurn,
    1
  );
  const isYourBoard = true;
  const cardsInSlot: Readonly<BoardSlot> = {
    type: SlotType.Milpa,
    row: Row.First,
    column: Column.First,
    isYourBoard,
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
    isYourTurn,
    1
  );
  expect(canInteractWithCard2(true, cardsInSlot)).toBeFalsy();
  isYourTurn = true;
  const canInteractWithCard3 = compute_can_interact_with_card(
    selectedCard2,
    isYourTurn,
    TOTAL_TURNS + 1
  );
  expect(canInteractWithCard3(true, cardsInSlot)).toBeFalsy();
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
    isYourTurn,
    1
  );
  const isYourBoard = true;
  const cardsInSlot: Readonly<BoardSlot> = {
    type: SlotType.Milpa,
    row: Row.First,
    column: Column.First,
    isYourBoard,
    cards: [EmptySlot],
  };
  const interaction1 = canInteractWithCard(isYourBoard, cardsInSlot);
  expect(interaction1).toBeTruthy();
  const interaction2 = canInteractWithCard(!isYourBoard, cardsInSlot);
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
    isYourTurn,
    1
  );
  const isYourBoard = true;
  const cardsInSlot: Readonly<BoardSlot> = {
    type: SlotType.Milpa,
    row: Row.First,
    column: Column.First,
    isYourBoard,
    cards: [Manure],
  };
  const interaction1 = canInteractWithCard(isYourBoard, cardsInSlot);
  expect(interaction1).toBeTruthy();
  const interaction2 = canInteractWithCard(!isYourBoard, cardsInSlot);
  expect(interaction2).toBeFalsy();
});

test("should return function that computes if a shovel can interact with filled slots", () => {
  const selectedCard: Readonly<SelectedCard> = {
    card: { ...Shovel },
    indexFromHand: 7,
    type: CardType.Good,
  };
  let isYourTurn: boolean | undefined = true;
  const canInteractWithCard = compute_can_interact_with_card(
    selectedCard,
    isYourTurn,
    1
  );
  const isYourBoard = true;
  const cardsInSlot: Readonly<BoardSlot> = {
    type: SlotType.Milpa,
    row: Row.First,
    column: Column.First,
    isYourBoard,
    cards: [{ ...Corn }, { ...Huitlacoche }],
  };
  const interaction1 = canInteractWithCard(isYourBoard, cardsInSlot);
  expect(interaction1).toBeTruthy();
  const interaction2 = canInteractWithCard(!isYourBoard, cardsInSlot);
  expect(interaction2).toBeTruthy();
});
