import { score_on_corn_played } from "..";
import { CropId } from "../../../enums";
import { AnyCard } from "../../../types";

export const compute_score_on_card_played = (
  oldScores: [number, number],
  card: AnyCard
): [number, number] => {
  let newScores;
  switch (card.id) {
    case CropId.Corn:
      newScores = score_on_corn_played(oldScores);
      break;
    default:
      throw Error(`${card.name}: scoring not implemented`);
      break;
  }
  return newScores;
};
