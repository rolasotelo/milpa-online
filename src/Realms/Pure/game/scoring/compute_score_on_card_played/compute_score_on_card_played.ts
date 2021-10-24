import {
  score_on_beans_played,
  score_on_blue_corn_played,
  score_on_chilli_played,
  score_on_corn_played,
  score_on_pumpkin_played,
  score_on_quelites_played,
  score_on_tomatillo_played,
  score_on_tomatoe_played,
} from "..";
import { CropId } from "../../../enums";
import { AnyCard } from "../../../types";

export const compute_score_on_card_played = (
  oldScores: [number, number],
  card: AnyCard
): [number, number] => {
  let newScores;
  switch (card.id) {
    case CropId.Beans:
      newScores = score_on_beans_played(oldScores, card.modifier);
      break;
    case CropId.BlueCorn:
      newScores = score_on_blue_corn_played(oldScores, card.modifier);
      break;
    case CropId.Chilli:
      newScores = score_on_chilli_played(oldScores, card.modifier);
      break;
    case CropId.Corn:
      newScores = score_on_corn_played(oldScores, card.modifier);
      break;
    case CropId.Pupmkin:
      newScores = score_on_pumpkin_played(oldScores, card.modifier);
      break;
    case CropId.Quelites:
      newScores = score_on_quelites_played(oldScores, card.modifier);
      break;
    case CropId.Tomatillo:
      newScores = score_on_tomatillo_played(oldScores, card.modifier);
      break;
    case CropId.Tomatoe:
      newScores = score_on_tomatoe_played(oldScores, card.modifier);
      break;
    default:
      throw Error(`${card.name}: scoring not implemented`);
      break;
  }
  return newScores;
};
