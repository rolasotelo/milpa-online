import { contains } from "underscore";
import {
  CACAO_WHEN_TOMATOE_PLAYED,
  MANURE_MUTIPLIER,
} from "../../../constants";
import { ModifierId, Players } from "../../../enums";

export const score_on_tomatoe_played = (
  oldScore: [number, number],
  modifiers: ModifierId[]
): [number, number] => {
  const times = contains(modifiers, ModifierId.Manure) ? MANURE_MUTIPLIER : 1;
  return [
    oldScore[Players.You] + times * CACAO_WHEN_TOMATOE_PLAYED,
    oldScore[Players.Opponent],
  ];
};
