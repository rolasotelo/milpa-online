import { AnyCard, Board, BoardSlot } from "../../../types";
import { Flower } from "../../cards/crops/flower";
import { NEW_FLOWER_PERCENTAGE } from "./constants";

export const score_pumpkin_at_the_end_of_turn = (
  board: Board,
  turn: number
): { board: Board; score: number } => {
  const milpa = board.milpa;
  const edges = board.edges;

  const isThereNewFlower = Math.random() * 100 <= NEW_FLOWER_PERCENTAGE;
  if (isThereNewFlower) {
    const milpaOrEdges = Math.floor(Math.random() * 2);
    const row = Math.floor(Math.random() * 4);
    const column = Math.floor(Math.random() * 4);
    if (milpaOrEdges) {
      ((milpa as BoardSlot[][])[row][column].cards as AnyCard[]).push({
        ...Flower,
      });
    }
  }

  return {
    board: { ...board },
    score: 0,
  };
};
