import { Good } from "../../types";
import { Cactus, CACTUS_ID } from "./Cactus/Cactus";
import { Coatlicue, COATLICUE_ID } from "./Coatlicue/Coatlicue";
import { Maguey, MAGUEY_ID } from "./Maguey/Maguey";

export type goodIds = typeof CACTUS_ID | typeof COATLICUE_ID | typeof MAGUEY_ID;

export const goods: Good[] = [Cactus, Coatlicue, Maguey];
