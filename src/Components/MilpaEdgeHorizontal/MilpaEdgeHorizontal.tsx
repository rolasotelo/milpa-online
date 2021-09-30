import React from "react";
import { ROW_SIZE } from "../../common/constants";
import { cropIds } from "../../common/game/crops/crops";
import { goodIds } from "../../common/game/goods/goods";
import { AnyCard } from "../../common/types";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import Good from "../Good/Good";

interface Props {
  anyCards: (AnyCard | undefined)[];
  isYourMilpa: boolean;
  row: number;
}

const MilpaEdgeHorizontal = (props: Props) => {
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

  return (
    <div className="h-20 w-80 bg-mexicanGreen-dark flex flex-row items-center rounded-lg">
      {props.anyCards.map((anyCard, index) => {
        return (
          <Good
            key={index}
            text={anyCard ? anyCard.icon : ""}
            canInteract={canCardInteractWith(anyCard)}
            isYourMilpa={props.isYourMilpa}
            column={index % ROW_SIZE}
            row={props.row}
          />
        );
      })}
    </div>
  );
};

export default MilpaEdgeHorizontal;
