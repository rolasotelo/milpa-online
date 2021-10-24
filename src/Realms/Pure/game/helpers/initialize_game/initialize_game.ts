import { create_edges, create_milpa } from "..";
import { CROPSDECKDEFINITION, GOODSDECKDEFINITION } from "../../../constants";
import { Board, Crop, Good } from "../../../types";
import { EmptySlot } from "../../cards";
import { create_deck } from "../../decks";

export const initialize_game = (): {
  cropsDeck: ReadonlyArray<Crop>;
  goodsDeck: ReadonlyArray<Good>;
  boards: Readonly<[Readonly<Board>, Readonly<Board>]>;
} => {
  const cropsDeck = create_deck(CROPSDECKDEFINITION);
  const goodsDeck = create_deck(GOODSDECKDEFINITION);

  const yourMilpa = create_milpa(true, EmptySlot);
  const opponentsMilpa = create_milpa(false, EmptySlot);
  const yourEdge = create_edges(true, EmptySlot);
  const opponentsEdge = create_edges(false, EmptySlot);

  return {
    cropsDeck,
    goodsDeck,
    boards: [
      { milpa: yourMilpa, edges: yourEdge },
      { milpa: opponentsMilpa, edges: opponentsEdge },
    ],
  };
};
