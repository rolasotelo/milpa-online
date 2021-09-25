import React from "react";
import { AnyCard } from "../../common/types";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import { GoodsSlots } from "../Board/Board";
import CacaoBoard from "../CacaoBoard/CacaoBoard";
import Crop from "../Crop/Crop";
import MilpaEdgeHorizontal from "../MilpaEdgeHorizontal/MilpaEdgeHorizontal";
import MilpaEdgeVertical from "../MilpaEdgeVertical/MilpaEdgeVertical";
import StatusBoard from "../StatusBoard/StatusBoard";
import { cropIds } from "../../common/game/crops/crops";
import { goodIds } from "../../common/game/goods/goods";

interface Props {
  milpa: (AnyCard | undefined)[];
  edges: GoodsSlots;
  isYourMilpa: boolean;
}

const Milpa = (props: Props) => {
  const context = useGameContext();
  const canInteractEmptyCrop =
    context.isYourTurn &&
    ((props.isYourMilpa &&
      !!context.cardSelected?.canInteractWith.ownEmptyCropSlots) ||
      (!props.isYourMilpa &&
        !!context.cardSelected?.canInteractWith.othersEmptyCropSlots));

  const canInteractWithOtherCardsInOwnFilledCropSlots =
    typeof context.cardSelected?.canInteractWith.ownFilledCropSlots !==
      "undefined" &&
    typeof context.cardSelected?.canInteractWith.ownFilledCropSlots !==
      "boolean";
  const canInteractWithOtherCardsInOthersFilledCropSlots =
    typeof context.cardSelected?.canInteractWith.othersFilledCropSlots !==
      "undefined" &&
    typeof context.cardSelected?.canInteractWith.othersFilledCropSlots !==
      "boolean";

  const canInteractFilledCrop =
    context.isYourTurn &&
    ((props.isYourMilpa &&
      !!context.cardSelected?.canInteractWith.ownFilledCropSlots) ||
      (!props.isYourMilpa &&
        !!context.cardSelected?.canInteractWith.othersFilledCropSlots));

  const canInteractWithFilledMilpaSlot = (
    anyCard: AnyCard,
    isYourMilpa: boolean
  ) => {
    console.log("isYourMilpa", isYourMilpa);
    console.log(
      "carSelected",
      context.cardSelected?.id,
      "can interact",
      context.cardSelected?.canInteractWith.ownFilledCropSlots
    );
    console.log(
      "canInteractWithOtherCardsInFilledCropsSlots",
      canInteractWithOtherCardsInOwnFilledCropSlots
    );
    console.log("anyCard", anyCard.id);
    if (canInteractWithOtherCardsInOwnFilledCropSlots) {
      let canInteract = false;
      if (isYourMilpa) {
        (
          context.cardSelected?.canInteractWith.ownFilledCropSlots as (
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
    } else if (canInteractWithOtherCardsInOthersFilledCropSlots) {
      let canInteract = false;
      if (!isYourMilpa) {
        (
          context.cardSelected?.canInteractWith.othersFilledCropSlots as (
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
      return canInteractFilledCrop;
    }
  };

  return (
    <div className="flex flex-col bg-mexicanGreen-light w-3/8 rounded-2xl">
      <div className="p-1">
        <StatusBoard />
      </div>
      <div className="flex flex-col items-center h-full">
        <MilpaEdgeHorizontal
          isYourMilpa={props.isYourMilpa}
          anyCards={props.edges.top}
        />
        <div className="flex flex-row items-center justify-evenly w-full px-1">
          <MilpaEdgeVertical
            isYourMilpa={props.isYourMilpa}
            anyCards={props.edges.left}
          />
          <div
            className="w-80 h-80  bg-yellow-800 grid grid-cols-4 py-2
           items-center rounded-lg"
          >
            {props.milpa.map((anyCard, index) => {
              return (
                <Crop
                  key={index}
                  text={anyCard ? anyCard.icon : ""}
                  canInteract={
                    anyCard
                      ? canInteractWithFilledMilpaSlot(
                          anyCard,
                          props.isYourMilpa
                        )
                      : canInteractEmptyCrop
                  }
                />
              );
            })}
          </div>
          <MilpaEdgeVertical
            isYourMilpa={props.isYourMilpa}
            anyCards={props.edges.right}
          />
        </div>

        <MilpaEdgeHorizontal
          isYourMilpa={props.isYourMilpa}
          anyCards={props.edges.bottom}
        />
      </div>
    </div>
  );
};

export default Milpa;
