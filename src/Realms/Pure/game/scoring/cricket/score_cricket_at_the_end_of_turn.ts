import { filter, pluck } from "underscore";
import { ModifierId } from "../../../enums";
import { AnyCard, Board, BoardSlot } from "../../../types";
import { Cricket, Pumpkin } from "../../cards";
import { compute_total_cards_in_board, is_there_in_slot } from "../../helpers";
import { PLUS_PER_CRICKET_IN_YOUR_BOARD } from "./constants";

export const score_cricket_at_the_end_of_turn = (
  board: Board,
  turn: number
): { board: Board; score: number } => {
  const milpa = board.milpa;
  const edges = board.edges;
  let totalCrickets =
    compute_total_crickets(milpa) + compute_total_crickets(edges);

  const newMilpaBeforeJumpFromEdges = advance_crickets_in_milpa(milpa);
  const newBoard = advance_crickets_from_edges(
    edges,
    newMilpaBeforeJumpFromEdges
  );

  return {
    board: newBoard,
    score: totalCrickets * PLUS_PER_CRICKET_IN_YOUR_BOARD,
  };
};

export const compute_total_crickets = compute_total_cards_in_board(Cricket);

const advance_crickets_in_milpa = (
  milpa: readonly BoardSlot[][]
): BoardSlot[][] => {
  let newMilpa = JSON.parse(JSON.stringify(milpa));

  milpa.forEach((row, rowIndex) => {
    row.forEach((slot, columnIndex) => {
      slot.cards.forEach((card) => {
        if (card.id === Cricket.id) {
          newMilpa[rowIndex][columnIndex].cards = [
            ...filter(slot.cards, (card) => {
              return card.id !== Cricket.id;
            }),
          ];

          const rowToJump = compute_new_random_row_or_column(rowIndex);
          const columnToJump = compute_new_random_row_or_column(columnIndex);
          (newMilpa[rowToJump][columnToJump].cards as AnyCard[]).pop();
          (newMilpa[rowToJump][columnToJump].cards as AnyCard[]).push({
            ...Cricket,
            modifier: [ModifierId.Opponents],
          });
        }
      });
    });
  });

  return newMilpa;
};

const advance_crickets_from_edges = (
  edges: readonly BoardSlot[][],
  milpa: readonly BoardSlot[][]
): Board => {
  let newMilpa = JSON.parse(JSON.stringify(milpa));
  let newEdges = JSON.parse(JSON.stringify(edges));
  edges.forEach((row, rowIndex) => {
    row.forEach((slot, columnIndex) => {
      slot.cards.forEach((card) => {
        if (card.id === Cricket.id) {
          newEdges[rowIndex][columnIndex].cards = filter(slot.cards, (card) => {
            return card.id !== Cricket.id;
          });
          const [rowToJump, columnToJump] =
            compute_new_row_and_column_from_cricket_in_edges(
              rowIndex,
              columnIndex
            );
          (newMilpa[rowToJump][columnToJump].cards as AnyCard[]).pop();
          (newMilpa[rowToJump][columnToJump].cards as AnyCard[]).push({
            ...Cricket,
            modifier: [ModifierId.Opponents],
          });
        }
      });
    });
  });
  return {
    milpa: newMilpa,
    edges: newEdges,
  };
};

export const is_there_crickets_in_slot = is_there_in_slot(Cricket);

const compute_new_random_row_or_column = (rowOrColumn: number) => {
  const newRowOrColumn = rowOrColumn + (1 + -2 * Math.floor(2 * Math.random()));
  return newRowOrColumn < 0
    ? newRowOrColumn + 2
    : newRowOrColumn > 3
    ? newRowOrColumn - 2
    : newRowOrColumn;
};

const compute_new_row_and_column_from_cricket_in_edges = (
  row: number,
  column: number
) => {
  const newRow = row === 0 || row === 1 ? 3 * row : column;
  const newColumn = row === 2 || row === 3 ? 3 * (row - 2) : column;
  return [newRow, newColumn];
};
