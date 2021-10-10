import { create_edges, create_milpa } from "..";
import { AnyCard, Board } from "../../../types";

export const create_board = (filler?: Readonly<AnyCard>): Readonly<Board> => {
  let board: Board = { milpa: [], edges: [] };
  if (filler) {
    board.milpa = create_milpa(filler);
    board.edges = create_edges(filler);
  }
  return board;
};
