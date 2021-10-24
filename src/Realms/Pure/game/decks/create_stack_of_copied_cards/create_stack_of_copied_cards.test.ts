import { Corn, EmptySlot } from "../../cards";
import { Card } from "../../../enums";
import { AnyCard } from "../../../types";
import { create_stack_of_copied_cards } from "./create_stack_of_copied_cards";

test("should return array of unique cards with correct length", () => {
  const card = Corn;
  const total = 10;
  const stack = create_stack_of_copied_cards(card, total);
  expect(Array.isArray(stack)).toBeTruthy();
  expect(stack.length).toEqual(total);
  expect(stack[Card.First]).toEqual(card);
  (stack as AnyCard[])[Card.First].icon = "🥦";
  (stack as AnyCard[])[Card.Second] = EmptySlot;
  expect(stack[Card.First].icon).toEqual("🥦");
  expect(stack[Card.Second]).toEqual(EmptySlot);
  expect(stack[Card.Third]).toEqual(card);
});
