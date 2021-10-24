import { contains } from "underscore";
import { CACAO_WHEN_CORN_PLAYED, MANURE_MUTIPLIER } from "../../../constants";
import { ModifierId, Players } from "../../../enums";

export const score_on_corn_played = (
  oldScore: [number, number],
  modifiers: ModifierId[]
): [number, number] => {
  const times = contains(modifiers, ModifierId.Manure) ? MANURE_MUTIPLIER : 1;
  return [
    oldScore[Players.You] + times * CACAO_WHEN_CORN_PLAYED,
    oldScore[Players.Opponent],
  ];
};
