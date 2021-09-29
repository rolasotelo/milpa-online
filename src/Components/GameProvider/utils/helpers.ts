import { cropIds } from "../../../common/game/crops/crops";
import { goodIds } from "../../../common/game/goods/goods";
import { AnyCard, Crop, Good, Milpa, User } from "../../../common/types";

export const computeIsYourTurn = (players: User[]) => {
  return !!(
    players && players[0]?.gameStatus?.playerTurn === players[0]?.userID
  );
};

export const computeCurrentTurn = (players: User[]) => {
  return players[0]?.gameStatus?.currentTurn;
};

export const computeMilpasForDisplay = (players: User[]) => {
  let yourMilpa = undefined;
  let otherMilpa = undefined;
  if (
    players &&
    players[0]?.userID &&
    players[1]?.userID &&
    typeof players[0]?.gameStatus?.milpas !== "undefined"
  ) {
    const milpaMap = new Map(Object.entries(players[0]?.gameStatus?.milpas));
    yourMilpa = {
      isYourMilpa: true,
      milpa: milpaMap.get(players[0]?.userID),
    };
    otherMilpa = {
      isYourMilpa: false,
      milpa: milpaMap.get(players[1]?.userID),
    };
  }
  return { yourMilpa, otherMilpa };
};

export const computeHands = (players: User[]) => {
  let cropsHand: Crop[] = [];
  let goodsHand: Good[] = [];

  if (
    players &&
    typeof players[0].gameStatus?.cropsHand !== "undefined" &&
    typeof players[0].gameStatus?.goodsHand !== "undefined"
  ) {
    cropsHand = players[0].gameStatus.cropsHand;
    goodsHand = players[0].gameStatus.goodsHand;
  }
  return { cropsHand, goodsHand };
};

export const computeInteractions = (
  isYourTurn: boolean,
  cardSelected: Good | Crop | undefined
) => {
  const canCardInMilpaSlot = (isYourMilpa: boolean) => {
    return {
      interactWithEmptySlot:
        isYourTurn &&
        ((isYourMilpa && !!cardSelected?.canInteractWith.ownEmptyMilpaSlots) ||
          (!isYourMilpa &&
            !!cardSelected?.canInteractWith.othersEmptyMilpaSlots)),
      interactWithOtherCardsInOwnFilledSlot:
        typeof cardSelected?.canInteractWith.ownFilledMilpaSlots !==
          "undefined" &&
        typeof cardSelected?.canInteractWith.ownFilledMilpaSlots !== "boolean",
      interactWithOtherCardsInOthersFilledSlots:
        typeof cardSelected?.canInteractWith.othersFilledMilpaSlots !==
          "undefined" &&
        typeof cardSelected?.canInteractWith.othersFilledMilpaSlots !==
          "boolean",
      interactWithFilledSlot:
        isYourTurn &&
        ((isYourMilpa && !!cardSelected?.canInteractWith.ownFilledMilpaSlots) ||
          (!isYourMilpa &&
            !!cardSelected?.canInteractWith.othersFilledMilpaSlots)),
    };
  };

  const canCardInEdgeSlot = (isYourMilpa: boolean) => {
    return {
      interactWithEmptySlot:
        isYourTurn &&
        ((isYourMilpa && !!cardSelected?.canInteractWith.ownEmptyEdgeSlots) ||
          (!isYourMilpa &&
            !!cardSelected?.canInteractWith.othersEmptyEdgeSlots)),
      interactWithOtherCardsInOwnFilledSlot:
        typeof cardSelected?.canInteractWith.ownFilledEdgeSlots !==
          "undefined" &&
        typeof cardSelected?.canInteractWith.ownFilledEdgeSlots !== "boolean",
      interactWithOtherCardsInOthersFilledSlots:
        typeof cardSelected?.canInteractWith.othersFilledEdgeSlots !==
          "undefined" &&
        typeof cardSelected?.canInteractWith.othersFilledEdgeSlots !==
          "boolean",
      interactWithFilledSlot:
        isYourTurn &&
        ((isYourMilpa && !!cardSelected?.canInteractWith.ownFilledEdgeSlots) ||
          (!isYourMilpa &&
            !!cardSelected?.canInteractWith.othersFilledEdgeSlots)),
    };
  };

  const canCardInteractWithFilledSlot = (
    anyCard: AnyCard,
    isYourMilpa: boolean,
    interactWithOtherCardsInOwnFilledSlot: boolean,
    interactWithOtherCardsInOthersFilledSlots: boolean,
    interactWithFilledSlot: boolean,
    ownCardsCardSelectedCanInteractWith: (cropIds | goodIds)[],
    othersCardsCardSelectedCanInteractWith: (cropIds | goodIds)[]
  ) => {
    if (interactWithOtherCardsInOwnFilledSlot) {
      let canInteract = false;
      if (isYourMilpa) {
        ownCardsCardSelectedCanInteractWith.forEach((cropId) => {
          if (cropId === anyCard.id) {
            canInteract = true;
          }
        });
      }

      return canInteract && isYourTurn;
    } else if (interactWithOtherCardsInOthersFilledSlots) {
      let canInteract = false;
      if (!isYourMilpa) {
        othersCardsCardSelectedCanInteractWith.forEach((cropId) => {
          if (cropId === anyCard.id) {
            canInteract = true;
          }
        });
      }

      return canInteract && isYourTurn;
    } else {
      return interactWithFilledSlot;
    }
  };
  return {
    canCardInMilpaSlot,
    canCardInEdgeSlot,
    canCardInteractWithFilledSlot,
  };
};
