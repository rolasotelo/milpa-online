import { Good } from "../../types";
import { Cactus, CACTUS_ID } from "./Cactus/Cactus";
import { Coatlicue, COATLICUE_ID } from "./Coatlicue/Coatlicue";
import { Maguey, MAGUEY_ID } from "./Maguey/Maguey";
import { Shovel, SHOVEL_ID } from "./Shovel/Shovel";

export type goodIds =
  | typeof CACTUS_ID
  | typeof COATLICUE_ID
  | typeof MAGUEY_ID
  | typeof SHOVEL_ID;

export const goods: Good[] = [Cactus, Coatlicue, Maguey, Shovel];
