import { compute_total_pumpkins } from "..";
import { AnyCard, Board, BoardSlot } from "../../../types";
import { Flower } from "../../cards/crops/flower";
import { is_empty } from "../../helpers";
import { NEW_FLOWER_PERCENTAGE } from "./constants";

export const score_pumpkin_at_the_end_of_turn = (
  board: Board,
  turn: number
): { board: Board; score: number } => {
  const milpa = board.milpa;
  const edges = board.edges;
  let totalPumpkin =
    compute_total_pumpkins(milpa) + compute_total_pumpkins(edges);
  let totalNewFlowers = 0;

  while (totalPumpkin > 0) {
    const isThereNewFlower = Math.random() * 100 <= NEW_FLOWER_PERCENTAGE;
    if (isThereNewFlower) {
      const milpaOrEdges = Math.floor(Math.random() * 2);
      const row = Math.floor(Math.random() * 4);
      const column = Math.floor(Math.random() * 4);
      if (milpaOrEdges === 0) {
        ((milpa as BoardSlot[][])[row][column].cards as AnyCard[]).push({
          ...Flower,
        });
        if (is_empty(milpa[row][column])) {
          ((milpa as BoardSlot[][])[row][column].cards as AnyCard[]).splice(
            0,
            1
          );
        }
      } else {
        ((edges as BoardSlot[][])[row][column].cards as AnyCard[]).push({
          ...Flower,
        });
        if (is_empty(edges[row][column])) {
          ((edges as BoardSlot[][])[row][column].cards as AnyCard[]).splice(
            0,
            1
          );
        }
      }
      totalNewFlowers++;
    }
    totalPumpkin--;
  }

  return {
    board: { ...board },
    score: totalNewFlowers,
  };
};
