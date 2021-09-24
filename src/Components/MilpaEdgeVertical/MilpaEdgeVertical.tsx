import React from "react";
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
  const canInteractFilledGood =
    context.isYourTurn &&
    ((props.isYourMilpa &&
      !!context.cardSelected?.canInteractWith.ownFilledGoodSlots) ||
      (!props.isYourMilpa &&
        !!context.cardSelected?.canInteractWith.othersFilledGoodSlots));
  return (
    <div className="w-20 h-80 bg-mexicanGreen-dark flex flex-col justify-evenly rounded-lg">
      {props.anyCards.map((anyCard, index) => {
        return (
          <Good
            key={index}
            text={anyCard ? anyCard.icon : ""}
            canInteract={anyCard ? canInteractFilledGood : canInteractEmptyGood}
          />
        );
      })}
    </div>
  );
};

export default MilpaEdgeVertical;
