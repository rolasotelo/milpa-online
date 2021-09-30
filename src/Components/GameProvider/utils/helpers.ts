import { CROPS_SIZE, ROW_SIZE } from "../../../common/constants";
import { cropIds } from "../../../common/game/crops/crops";
import { goodIds } from "../../../common/game/goods/goods";
import { AnyCard, Crop, Good, User } from "../../../common/types";
import { GoodsSlots } from "../../Board/Board";
import { GameContextType } from "../GameProvider";

export const computeDisplayableBoards = (context: GameContextType) => {
  let leftMilpa: (AnyCard | undefined)[] = Array(CROPS_SIZE).fill(undefined);
  let rightMilpa: (AnyCard | undefined)[] = Array(CROPS_SIZE).fill(undefined);
  let leftEdges: GoodsSlots = {
    top: Array(ROW_SIZE).fill(undefined),
    bottom: Array(ROW_SIZE).fill(undefined),
    left: Array(ROW_SIZE).fill(undefined),
    right: Array(ROW_SIZE).fill(undefined),
  };
  let rightEdges: GoodsSlots = {
    top: Array(ROW_SIZE).fill(undefined),
    bottom: Array(ROW_SIZE).fill(undefined),
    left: Array(ROW_SIZE).fill(undefined),
    right: Array(ROW_SIZE).fill(undefined),
  };

  if (
    context.yourMilpa &&
    context.otherMilpa &&
    context.yourMilpa.milpa &&
    context.otherMilpa.milpa
  ) {
    if (context.yourMilpa.milpa.crops && context.otherMilpa.milpa.crops) {
      leftMilpa = [
        ...context.yourMilpa.milpa.crops[0],
        ...context.yourMilpa.milpa.crops[1],
        ...context.yourMilpa.milpa.crops[2],
        ...context.yourMilpa.milpa.crops[3],
      ];
      rightMilpa = [
        ...context.otherMilpa.milpa?.crops[0],
        ...context.otherMilpa.milpa?.crops[1],
        ...context.otherMilpa.milpa?.crops[2],
        ...context.otherMilpa.milpa?.crops[3],
      ];
    }
  }

  if (
    context.yourMilpa &&
    context.otherMilpa &&
    context.yourMilpa.milpa &&
    context.otherMilpa.milpa
  ) {
    if (context.yourMilpa.milpa.goods && context.otherMilpa.milpa.goods) {
      leftEdges = {
        top: context.yourMilpa.milpa?.goods[0],
        bottom: context.yourMilpa.milpa?.goods[1],
        left: context.yourMilpa.milpa?.goods[2],
        right: context.yourMilpa.milpa?.goods[3],
      };
      rightEdges = {
        top: context.otherMilpa.milpa?.goods[0],
        bottom: context.otherMilpa.milpa?.goods[1],
        left: context.otherMilpa.milpa?.goods[2],
        right: context.otherMilpa.milpa?.goods[3],
      };
    }
  }
  return {
    leftBoard: { milpa: leftMilpa, edges: leftEdges },
    rightBoard: { milpa: rightMilpa, edges: rightEdges },
  };
};

export const computeCanCardInteractWithMilpaSlot = (
  context: GameContextType,
  isYourMilpa: boolean
) => {
  const {
    interactWithEmptySlot,
    interactWithFilledSlot,
    interactWithOtherCardsInOthersFilledSlots,
    interactWithOtherCardsInOwnFilledSlot,
  } = context.canCardInMilpaSlot(isYourMilpa);
  const canCardInteractWith = (anyCard: AnyCard | undefined) => {
    return anyCard
      ? context.canCardInteractWithFilledSlot(
          anyCard,
          isYourMilpa,
          interactWithOtherCardsInOwnFilledSlot,
          interactWithOtherCardsInOthersFilledSlots,
          interactWithFilledSlot,
          context.cardSelected.card?.canInteractWith.ownFilledMilpaSlots as (
            | cropIds
            | goodIds
          )[],
          context.cardSelected.card?.canInteractWith.othersFilledMilpaSlots as (
            | cropIds
            | goodIds
          )[]
        )
      : interactWithEmptySlot;
  };
  return canCardInteractWith;
};

export const computeCanCardInteractWithEdgeSlot = (
  context: GameContextType,
  isYourMilpa: boolean
) => {
  const {
    interactWithEmptySlot,
    interactWithFilledSlot,
    interactWithOtherCardsInOthersFilledSlots,
    interactWithOtherCardsInOwnFilledSlot,
  } = context.canCardInEdgeSlot(isYourMilpa);
  const canCardInteractWith = (anyCard: AnyCard | undefined) => {
    return anyCard
      ? context.canCardInteractWithFilledSlot(
          anyCard,
          isYourMilpa,
          interactWithOtherCardsInOwnFilledSlot,
          interactWithOtherCardsInOthersFilledSlots,
          interactWithFilledSlot,
          context.cardSelected.card?.canInteractWith.ownFilledEdgeSlots as (
            | cropIds
            | goodIds
          )[],
          context.cardSelected.card?.canInteractWith.othersFilledEdgeSlots as (
            | cropIds
            | goodIds
          )[]
        )
      : interactWithEmptySlot;
  };
  return canCardInteractWith;
};

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
  cardSelected: { card: Crop | Good | undefined; index: number }
) => {
  const canCardInMilpaSlot = (isYourMilpa: boolean) => {
    return {
      interactWithEmptySlot:
        isYourTurn &&
        ((isYourMilpa &&
          !!cardSelected.card?.canInteractWith.ownEmptyMilpaSlots) ||
          (!isYourMilpa &&
            !!cardSelected.card?.canInteractWith.othersEmptyMilpaSlots)),
      interactWithOtherCardsInOwnFilledSlot:
        typeof cardSelected.card?.canInteractWith.ownFilledMilpaSlots !==
          "undefined" &&
        typeof cardSelected.card?.canInteractWith.ownFilledMilpaSlots !==
          "boolean",
      interactWithOtherCardsInOthersFilledSlots:
        typeof cardSelected.card?.canInteractWith.othersFilledMilpaSlots !==
          "undefined" &&
        typeof cardSelected.card?.canInteractWith.othersFilledMilpaSlots !==
          "boolean",
      interactWithFilledSlot:
        isYourTurn &&
        ((isYourMilpa &&
          !!cardSelected.card?.canInteractWith.ownFilledMilpaSlots) ||
          (!isYourMilpa &&
            !!cardSelected.card?.canInteractWith.othersFilledMilpaSlots)),
    };
  };

  const canCardInEdgeSlot = (isYourMilpa: boolean) => {
    return {
      interactWithEmptySlot:
        isYourTurn &&
        ((isYourMilpa &&
          !!cardSelected.card?.canInteractWith.ownEmptyEdgeSlots) ||
          (!isYourMilpa &&
            !!cardSelected.card?.canInteractWith.othersEmptyEdgeSlots)),
      interactWithOtherCardsInOwnFilledSlot:
        typeof cardSelected.card?.canInteractWith.ownFilledEdgeSlots !==
          "undefined" &&
        typeof cardSelected.card?.canInteractWith.ownFilledEdgeSlots !==
          "boolean",
      interactWithOtherCardsInOthersFilledSlots:
        typeof cardSelected.card?.canInteractWith.othersFilledEdgeSlots !==
          "undefined" &&
        typeof cardSelected.card?.canInteractWith.othersFilledEdgeSlots !==
          "boolean",
      interactWithFilledSlot:
        isYourTurn &&
        ((isYourMilpa &&
          !!cardSelected.card?.canInteractWith.ownFilledEdgeSlots) ||
          (!isYourMilpa &&
            !!cardSelected.card?.canInteractWith.othersFilledEdgeSlots)),
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
