import { Good } from "../../types";
import { Cricket, CRICKET_ID } from "./Cricket/Cricket";
import { Coatlicue, COATLICUE_ID } from "./Coatlicue/Coatlicue";
import { Huitlacoche, HUITLACOCHE_ID } from "./Huitlacoche/Huitlacoche";
import { Maguey, MAGUEY_ID } from "./Maguey/Maguey";
import { Manure, MANURE_ID } from "./Manure/Manure";
import { Shovel, SHOVEL_ID } from "./Shovel/Shovel";
import { Tlaloc, TLALOC_ID } from "./Tlaloc/Tlaloc";

export type goodIds =
  | typeof CRICKET_ID
  | typeof COATLICUE_ID
  | typeof MAGUEY_ID
  | typeof SHOVEL_ID
  | typeof HUITLACOCHE_ID
  | typeof TLALOC_ID
  | typeof MANURE_ID;

export const goods: Good[] = [
  Cricket,
  Coatlicue,
  Maguey,
  Shovel,
  Huitlacoche,
  Tlaloc,
  Manure,
];
