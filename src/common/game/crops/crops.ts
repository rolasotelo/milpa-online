import { AnyCard, Crop } from "../../types";
import { Beans, BEANS_ID, scoreWhenBeansIsPlayed } from "./Beans/Beans";
import {
  BlueCorn,
  BLUE_CORN_ID,
  scoreWhenBlueCornIsPlayed,
} from "./BlueCorn/BlueCorn";
import { Chilli, CHILLI_ID, scoreWhenChilliIsPlayed } from "./Chilli/Chilli";
import { Corn, CORN_ID, scoreWhenCornIsPlayed } from "./Corn/Corn";
import {
  Pumpkin,
  PUMPKIN_ID,
  scoreWhenPumpkinIsPlayed,
} from "./Pumpkin/Pumpkin";
import {
  Quelites,
  QUELITES_ID,
  scoreWhenQuelitesIsPlayed,
} from "./Quelites/Quelites";
import {
  RedCorn,
  RED_CORN_ID,
  scoreWhenRedCornIsPlayed,
} from "./RedCorn/RedCorn";
import {
  scoreWhenTomatilloIsPlayed,
  Tomatillo,
  TOMATILLO_ID,
} from "./Tomatillo/Tomatillo";
import {
  scoreWhenTomatoeIsPlayed,
  Tomatoe,
  TOMATOE_ID,
} from "./Tomatoe/Tomatoe";

export type cropIds =
  | typeof BEANS_ID
  | typeof CHILLI_ID
  | typeof CORN_ID
  | typeof PUMPKIN_ID
  | typeof QUELITES_ID
  | typeof TOMATILLO_ID
  | typeof TOMATOE_ID
  | typeof BLUE_CORN_ID
  | typeof RED_CORN_ID;

export const crops: Crop[] = [
  BlueCorn,
  Corn,
  Tomatoe,
  Chilli,
  Beans,
  Tomatillo,
  Pumpkin,
  Quelites,
  RedCorn,
];

export const scoringCropCardWhenPlayed = new Map<
  cropIds,
  (yourScore: number, slot: AnyCard[]) => number
>();
scoringCropCardWhenPlayed.set(BEANS_ID, scoreWhenBeansIsPlayed);
scoringCropCardWhenPlayed.set(BLUE_CORN_ID, scoreWhenBlueCornIsPlayed);
scoringCropCardWhenPlayed.set(CHILLI_ID, scoreWhenChilliIsPlayed);
scoringCropCardWhenPlayed.set(CORN_ID, scoreWhenCornIsPlayed);
scoringCropCardWhenPlayed.set(PUMPKIN_ID, scoreWhenPumpkinIsPlayed);
scoringCropCardWhenPlayed.set(QUELITES_ID, scoreWhenQuelitesIsPlayed);
scoringCropCardWhenPlayed.set(RED_CORN_ID, scoreWhenRedCornIsPlayed);
scoringCropCardWhenPlayed.set(TOMATILLO_ID, scoreWhenTomatilloIsPlayed);
scoringCropCardWhenPlayed.set(TOMATOE_ID, scoreWhenTomatoeIsPlayed);
