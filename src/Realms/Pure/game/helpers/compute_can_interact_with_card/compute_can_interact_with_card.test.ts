import { compute_can_interact_with_card } from "..";
import { CardType } from "../../../enums";
import { SelectedCard } from "../../../types";
import { Corn } from "../../cards";

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
  expect(canInteractWithCard).toBeUndefined();
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
  expect(canInteractWithCard2).toBeUndefined();
});
