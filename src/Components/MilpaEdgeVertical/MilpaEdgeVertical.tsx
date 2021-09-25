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
  const {
    interactWithEmptySlot,
    interactWithFilledSlot,
    interactWithOtherCardsInOthersFilledSlots,
    interactWithOtherCardsInOwnFilledSlot,
  } = context.canCardInEdgeSlot(props.isYourMilpa);
  const canCardInteractWith = (anyCard: AnyCard | undefined) => {
    return anyCard
      ? context.canCardInteractWithFilledSlot(
          anyCard,
          props.isYourMilpa,
          interactWithOtherCardsInOwnFilledSlot,
          interactWithOtherCardsInOthersFilledSlots,
          interactWithFilledSlot,
          context.cardSelected?.canInteractWith.ownFilledEdgeSlots as (
            | cropIds
            | goodIds
          )[],
          context.cardSelected?.canInteractWith.othersFilledEdgeSlots as (
            | cropIds
            | goodIds
          )[]
        )
      : interactWithEmptySlot;
  };

  return (
    <div className="w-20 h-80 bg-mexicanGreen-dark flex flex-col justify-evenly rounded-lg">
      {props.anyCards.map((anyCard, index) => {
        return (
          <Good
            key={index}
            text={anyCard ? anyCard.icon : ""}
            canInteract={canCardInteractWith(anyCard)}
          />
        );
      })}
    </div>
  );
};

export default MilpaEdgeVertical;
