import { indexOf, reduce } from "underscore";
import { CardType } from "../../../enums";
import { Board, BoardSlot } from "../../../types";
import { Tlaloc } from "../../cards";
import { is_there_in_slot, transpose_matrix } from "../../helpers";
import {
  PLUS_PER_CROP_IN_LINE_PER_TLALOC,
  TLALOC_HARVEST_TURNS,
} from "./constants";

export const score_tlaloc_at_the_end_of_turn = (
  board: Board,
  turn: number
): { board: Board; score: number } => {
  const milpa = board.milpa;
  const edges = board.edges;
  let finalScore = 0;

  if (is_tlaloc_harvest_turn(turn)) {
    finalScore =
      compute_total_crops_in_line_with_tlalocs(milpa, edges) *
      PLUS_PER_CROP_IN_LINE_PER_TLALOC;
  }

  return {
    board: { ...board },
    score: finalScore,
  };
};

export const is_tlaloc_harvest_turn = (turn: number): boolean  => {
  return indexOf(TLALOC_HARVEST_TURNS(), turn) >= 0;
};

const compute_total_crops_in_line_with_tlalocs = (
  milpa: readonly BoardSlot[][],
  edges: readonly BoardSlot[][]
): number => {
  let totalCropsInLineWithTlalocs = 0;
  edges.forEach((row, rowIndex) => {
    row.forEach((slot, columnIndex) => {
      slot.cards.forEach((card) => {
        if (card.id === Tlaloc.id) {
          if (rowIndex === 2 || rowIndex === 3) {
            totalCropsInLineWithTlalocs =
              totalCropsInLineWithTlalocs +
              reduce(
                milpa[columnIndex],
                (totalCrops, slotInRow) => {
                  return (
                    totalCrops +
                    reduce(
                      slotInRow.cards,
                      (totalCrops, card) => {
                        return (
                          totalCrops + (card.type === CardType.Crop ? 1 : 0)
                        );
                      },
                      0
                    )
                  );
                },
                0
              );
          } else
            totalCropsInLineWithTlalocs =
              totalCropsInLineWithTlalocs +
              reduce(
                transpose_matrix(milpa as BoardSlot[][])[columnIndex],
                (totalCrops, slotInRow) => {
                  return (
                    totalCrops +
                    reduce(
                      slotInRow.cards,
                      (totalCrops, card) => {
                        return (
                          totalCrops + (card.type === CardType.Crop ? 1 : 0)
                        );
                      },
                      0
                    )
                  );
                },
                0
              );
        }
      });
    });
  });
  return totalCropsInLineWithTlalocs;
};

export const is_there_tlaloc_in_slot = is_there_in_slot(Tlaloc);
