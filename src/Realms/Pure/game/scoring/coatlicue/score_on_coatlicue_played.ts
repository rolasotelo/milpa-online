import { CACAO_WHEN_COATLICUE_PLAYED } from "../../../constants";
import { ModifierId, Players } from "../../../enums";

export const score_on_coatlicue_played = (
  oldScore: [number, number],
  modifiers: ModifierId[]
): [number, number] => {
  return [
    oldScore[Players.You] + CACAO_WHEN_COATLICUE_PLAYED,
    oldScore[Players.Opponent],
  ];
};
