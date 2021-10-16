import { create_milpa } from "..";
import { CROPSDECKDEFINITION, GOODSDECKDEFINITION } from "../../../constants";
import { Crop, Good, Milpa } from "../../../types";
import { EmptySlot } from "../../cards";
import { create_deck } from "../../decks";

export const initialize_game = (): {
  cropsDeck: ReadonlyArray<Crop>;
  goodsDeck: ReadonlyArray<Good>;
  milpas: Readonly<[Readonly<Milpa>, Readonly<Milpa>]>;
} => {
  const cropsDeck = create_deck(CROPSDECKDEFINITION);
  const goodsDeck = create_deck(GOODSDECKDEFINITION);

  const yourMilpa = create_milpa(EmptySlot);
  const oponentsMilps = create_milpa(EmptySlot);

  return { cropsDeck, goodsDeck, milpas: [yourMilpa, oponentsMilps] };
};
