import { create_edges, create_milpa } from "..";
import { AnyCard, Board } from "../../../types";

export const create_board = (
  isYourBoard: boolean,
  filler?: Readonly<AnyCard>
): Readonly<Board> => {
  let board: Board = { milpa: [], edges: [] };
  if (filler) {
    board.milpa = create_milpa(isYourBoard, filler);
    board.edges = create_edges(isYourBoard, filler);
  }
  return board;
};
