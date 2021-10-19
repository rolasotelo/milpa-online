import { where } from "underscore";
import { create_deck } from "..";
import { Card, Total } from "../../../enums";
import { Crop, DeckDefinition } from "../../../types";
import { Beans, Corn } from "../../cards";

test("should return deck of right size", () => {
  const deckdefinition: ReadonlyArray<DeckDefinition<Crop>> = [
    { card: Corn, total: Total.Corn },
    { card: Beans, total: Total.Beans },
  ];
  const deck = create_deck(deckdefinition);
  expect(Array.isArray(deck)).toBeTruthy();
  expect(deck.length).toEqual(Total.Corn + Total.Beans);
});

test("should return individual copies of cards", () => {
  const deckdefinition: ReadonlyArray<DeckDefinition<Crop>> = [
    { card: Corn, total: Total.Corn },
    { card: Beans, total: Total.Beans },
  ];
  const deck = create_deck(deckdefinition) as Crop[];
  deck[Card.First].icon = "🥦";
  deck[Card.Second].name = "Cucumba";
  expect(where(deck, { icon: "🥦" }).length).toEqual(1);
  expect(where(deck, { name: "Cucumba" }).length).toEqual(1);
});
