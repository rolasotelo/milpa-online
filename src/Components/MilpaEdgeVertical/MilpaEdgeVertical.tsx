import React from "react";
import { cropIds } from "../../common/game/crops/crops";
import { goodIds } from "../../common/game/goods/goods";
import { AnyCard } from "../../common/types";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import Good from "../Good/Good";

interface Props {
  anyCards: (AnyCard | undefined)[];
  isYourMilpa: boolean;
}

const MilpaEdgeVertical = (props: Props) => {
  const context = useGameContext();

  const canInteractEmptyGood =
    context.isYourTurn &&
    ((props.isYourMilpa &&
      !!context.cardSelected?.canInteractWith.ownEmptyGoodSlots) ||
      (!props.isYourMilpa &&
        !!context.cardSelected?.canInteractWith.othersEmptyGoodSlots));

  const canInteractWithOtherCardsInOwnFilledGoodSlots =
    typeof context.cardSelected?.canInteractWith.ownFilledGoodSlots !==
      "undefined" &&
    typeof context.cardSelected?.canInteractWith.ownFilledGoodSlots !==
      "boolean";
  const canInteractWithOtherCardsInOthersFilledGoodSlots =
    typeof context.cardSelected?.canInteractWith.othersFilledGoodSlots !==
      "undefined" &&
    typeof context.cardSelected?.canInteractWith.othersFilledGoodSlots !==
      "boolean";

  const canInteractFilledGood =
    context.isYourTurn &&
    ((props.isYourMilpa &&
      !!context.cardSelected?.canInteractWith.ownFilledGoodSlots) ||
      (!props.isYourMilpa &&
        !!context.cardSelected?.canInteractWith.othersFilledGoodSlots));

  const canInteractWithFilledEdgeSlot = (
    anyCard: AnyCard,
    isYourMilpa: boolean
  ) => {
    console.log("isYourMilpa", isYourMilpa);
    console.log(
      "carSelected",
      context.cardSelected?.id,
      "can interact",
      context.cardSelected?.canInteractWith.ownFilledGoodSlots
    );
    console.log(
      "canInteractWithOtherCardsInFilledGoodSlots",
      canInteractWithOtherCardsInOwnFilledGoodSlots
    );
    console.log("anyCard", anyCard.id);
    if (canInteractWithOtherCardsInOwnFilledGoodSlots) {
      let canInteract = false;
      if (isYourMilpa) {
        (
          context.cardSelected?.canInteractWith.ownFilledGoodSlots as (
            | cropIds
            | goodIds
          )[]
        ).forEach((cropId) => {
          if (cropId === anyCard.id) {
            canInteract = true;
          }
        });
      }

      return canInteract && context.isYourTurn;
    } else if (canInteractWithOtherCardsInOthersFilledGoodSlots) {
      let canInteract = false;
      if (!isYourMilpa) {
        (
          context.cardSelected?.canInteractWith.othersFilledGoodSlots as (
            | cropIds
            | goodIds
          )[]
        ).forEach((cropId) => {
          if (cropId === anyCard.id) {
            canInteract = true;
          }
        });
      }

      return canInteract && context.isYourTurn;
    } else {
      return canInteractFilledGood;
    }
  };
  return (
    <div className="w-20 h-80 bg-mexicanGreen-dark flex flex-col justify-evenly rounded-lg">
      {props.anyCards.map((anyCard, index) => {
        return (
          <Good
            key={index}
            text={anyCard ? anyCard.icon : ""}
            canInteract={
              anyCard
                ? canInteractWithFilledEdgeSlot(anyCard, props.isYourMilpa)
                : canInteractEmptyGood
            }
          />
        );
      })}
    </div>
  );
};

export default MilpaEdgeVertical;
