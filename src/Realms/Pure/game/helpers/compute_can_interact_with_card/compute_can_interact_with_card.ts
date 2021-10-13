import { AnyCard, SelectedCard } from "../../../types";

type ReturnType =
  | ((isYourMilpa: boolean, slot: AnyCard[]) => boolean)
  | undefined;

export const compute_can_interact_with_card = (
  selectedCard: Readonly<SelectedCard>,
  isYourTurn: boolean | undefined
): ReturnType => {
  let canInteractWithCard: ReturnType = undefined;
  if (
    isYourTurn &&
    selectedCard.card &&
    selectedCard.indexFromHand &&
    selectedCard.type
  ) {
    canInteractWithCard = (isYourMilpa: boolean, slot: AnyCard[]) => {
      return true;
    };
  }

  return canInteractWithCard;
};
