import { Crop } from "../../types";
import { Beans, BEANS_ID } from "./Beans/Beans";
import { Chilli, CHILLI_ID } from "./Chilli/Chilli";
import { Corn, CORN_ID } from "./Corn/Corn";
import { Pumpkin, PUMPKIN_ID } from "./Pumpkin/Pumpkin";
import { Quelites, QUELITES_ID } from "./Quelites/Quelites";
import { Tomatillo, TOMATILLO_ID } from "./Tomatillo/Tomatillo";
import { Tomatoe, TOMATOE_ID } from "./Tomatoe/Tomatoe";

export type cropIds =
  | typeof BEANS_ID
  | typeof CHILLI_ID
  | typeof CORN_ID
  | typeof PUMPKIN_ID
  | typeof QUELITES_ID
  | typeof TOMATILLO_ID
  | typeof TOMATOE_ID;

export const crops: Crop[] = [
  Corn,
  Tomatoe,
  Chilli,
  Beans,
  Tomatillo,
  Pumpkin,
  Quelites,
];
