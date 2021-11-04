import { Board } from "../../../types";
import { Beans } from "../../cards";
import {
  compute_total_adjacencies_of_card_in_milpa,
  is_there_in_slot,
} from "../../helpers";
import { PLUS_PER_BEANS_ADJACENT } from "./constants";

export const score_beans_at_the_end_of_the_game = (
  board: Board
): { board: Board; score: number } => {
  const milpa = board.milpa;
  let totalBeansAdjacencies = compute_total_beans_adjacents_to_beans(milpa);

  return {
    board: { ...board },
    score: totalBeansAdjacencies * PLUS_PER_BEANS_ADJACENT,
  };
};

export const is_there_beans_in_slot = is_there_in_slot(Beans);

export const compute_total_beans_adjacents_to_beans =
  compute_total_adjacencies_of_card_in_milpa(is_there_beans_in_slot, Beans);
