import React from "react";
import { CROPS_SIZE, TOTAL_CROPS } from "../../common/constants";
import { AnyCard } from "../../common/types";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import Calendar from "../Calendar/Calendar";
import Cards from "../Cards/Cards";
import Milpa from "../Milpa/Milpa";

interface Props {}

export type GoodsSlots = {
  top: (AnyCard | undefined)[];
  bottom: (AnyCard | undefined)[];
  left: (AnyCard | undefined)[];
  right: (AnyCard | undefined)[];
};

const Board = (props: Props) => {
  const context = useGameContext();
  let leftMilpa: (AnyCard | undefined)[] = Array(CROPS_SIZE).fill(undefined);
  let rightMilpa: (AnyCard | undefined)[] = Array(CROPS_SIZE).fill(undefined);
  let leftEdges: GoodsSlots = {
    top: Array(4).fill(undefined),
    bottom: Array(4).fill(undefined),
    left: Array(4).fill(undefined),
    right: Array(4).fill(undefined),
  };
  let rightEdges: GoodsSlots = {
    top: Array(4).fill(undefined),
    bottom: Array(4).fill(undefined),
    left: Array(4).fill(undefined),
    right: Array(4).fill(undefined),
  };

  if (context.yourMilpa.milpa && context.otherMilpa.milpa) {
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

  if (context.yourMilpa.milpa && context.otherMilpa.milpa) {
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

  return (
    <div className="flex flex-col">
      <Calendar />
      <div className="flex flex-row h-35rem ">
        <Milpa milpa={leftMilpa} edges={leftEdges} isYourMilpa />
        <Cards />
        <Milpa milpa={rightMilpa} edges={rightEdges} isYourMilpa={false} />
      </div>
    </div>
  );
};

export default Board;
