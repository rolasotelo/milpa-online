import { CACAO_WHEN_HUITLACOCHE_PLAYED } from "../../../constants";
import { ModifierId, Players } from "../../../enums";

export const score_on_huitlacoche_played = (
  oldScore: [number, number],
  modifiers: ModifierId[]
): [number, number] => {
  return [
    oldScore[Players.You] + CACAO_WHEN_HUITLACOCHE_PLAYED,
    oldScore[Players.Opponent],
  ];
};
