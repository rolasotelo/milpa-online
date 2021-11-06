import { indexOf, map, reduce } from "underscore";
import { CropId, GoodId } from "../../../enums";
import { AnyCard, Board, BoardSlot } from "../../../types";
import { Pumpkin } from "../../cards";
import { Flower } from "../../cards/crops/flower";
import { create_stack_of_copied_cards } from "../../decks";
import { compute_total_cards_in_board, is_there_in_slot } from "../../helpers";
import {
  FLOWER_HARVEST_TURNS,
  PLUS_PER_FLOWER_WHEN_HARVEST,
} from "../flower/constants";

export const score_flower_at_the_end_of_turn = (
  board: Board,
  turn: number
): { board: Board; score: number } => {
  const milpa = board.milpa;
  const edges = board.edges;
  let totalFlowers = 0;

  let {
    milpa: newMilpa,
    edges: newEdges,
  }:
    | Board
    | {
        milpa: undefined;
        edges: undefined;
      } = { milpa: undefined, edges: undefined };
  if (is_flower_harvest_turn(turn)) {
    totalFlowers = compute_total_flowers(milpa) + compute_total_flowers(edges);
    const { newMilpa: newMilpaWithPumpkins, newEdges: newEdgesWithPumpkins } =
      convert_flowers_to_pumpkins(milpa, edges);
    newMilpa = newMilpaWithPumpkins;
    newEdges = newEdgesWithPumpkins;
  }

  const finalScore = totalFlowers * PLUS_PER_FLOWER_WHEN_HARVEST;

  return {
    board: {
      milpa: newMilpa ? newMilpa : milpa,
      edges: newEdges ? newEdges : edges,
    },
    score: finalScore,
  };
};

export const compute_total_flowers = compute_total_cards_in_board(Flower);

export const is_flower_harvest_turn = (turn: number) => {
  return indexOf(FLOWER_HARVEST_TURNS(), turn) >= 0;
};

const convert_flowers_to_pumpkins = (
  milpa: readonly BoardSlot[][],
  edges: readonly BoardSlot[][]
) => {
  const newMilpa = map(milpa, (row) => {
    return map(row, (slot) => {
      return { ...slot, cards: put_pumpkin_on_empty_flowers(slot.cards) };
    });
  });
  const newEdges = map(edges, (row) => {
    return map(row, (slot) => {
      return { ...slot, cards: put_pumpkin_on_empty_flowers(slot.cards) };
    });
  });
  return { newMilpa, newEdges };
};

const put_pumpkin_on_empty_flowers = (
  cards: readonly AnyCard[]
): readonly AnyCard[] => {
  const newCards =
    (cards.length === 1 && cards[0].id === CropId.Flower) ||
    slot_has_only_cards(cards, CropId.Flower)
      ? create_stack_of_copied_cards(Pumpkin, cards.length)
      : [...cards];
  return newCards;
};

const slot_has_only_cards = (
  cards: readonly AnyCard[],
  lookFor: CropId | GoodId | "empty"
) => {
  return reduce(
    cards,
    (hasOnlyCard, card) => {
      return hasOnlyCard && card.id === lookFor;
    },
    true
  );
};

export const is_there_flower_in_slot = is_there_in_slot(Flower);
