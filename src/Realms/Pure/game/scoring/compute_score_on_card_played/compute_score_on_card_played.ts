import {
  score_on_beans_played,
  score_on_blue_corn_played,
  score_on_cactus_played,
  score_on_chilli_played,
  score_on_coatlicue_played,
  score_on_corn_played,
  score_on_cricket_played,
  score_on_huitlacoche_played,
  score_on_maguey_played,
  score_on_manure_played,
  score_on_pumpkin_played,
  score_on_quelites_played,
  score_on_red_corn_played,
  score_on_shovel_played,
  score_on_tlaloc_played,
  score_on_tomatillo_played,
  score_on_tomatoe_played,
} from "..";
import { CropId, GoodId, Players, ScoreLogType } from "../../../enums";
import { AnyCard, ScoringHistory } from "../../../types";

export const compute_score_on_card_played = (
  oldScores: [number, number],
  card: AnyCard
): { scores: [number, number]; scoringLog: ScoringHistory } => {
  let newScores;
  let scoringLog: ScoringHistory | undefined;
  switch (card.id) {
    case CropId.Beans:
      newScores = score_on_beans_played(oldScores, card.modifier);
      scoringLog = {
        name: "Player",
        description: [
          `+${
            newScores[Players.You] - oldScores[Players.You]
          }🍫 from 🌰 Bean played`,
        ],
        type: ScoreLogType.Card_Played,
        icon: null,
      };
      break;
    case CropId.BlueCorn:
      newScores = score_on_blue_corn_played(oldScores, card.modifier);
      scoringLog = {
        name: "Player",
        description: [
          `+${
            newScores[Players.You] - oldScores[Players.You]
          }🍫 from 🍆 Blue Corn played`,
        ],
        type: ScoreLogType.Card_Played,
        icon: null,
      };
      break;
    case CropId.Chilli:
      newScores = score_on_chilli_played(oldScores, card.modifier);
      scoringLog = {
        name: "Player",
        description: [
          `+${
            newScores[Players.You] - oldScores[Players.You]
          }🍫 from 🌶 Chilli played`,
        ],
        type: ScoreLogType.Card_Played,
        icon: null,
      };
      break;
    case CropId.Corn:
      newScores = score_on_corn_played(oldScores, card.modifier);
      scoringLog = {
        name: "Player",
        description: [
          `+${
            newScores[Players.You] - oldScores[Players.You]
          }🍫 from 🌽 Corn played`,
        ],
        type: ScoreLogType.Card_Played,
        icon: null,
      };
      break;
    case CropId.Pupmkin:
      newScores = score_on_pumpkin_played(oldScores, card.modifier);
      scoringLog = {
        name: "Player",
        description: [
          `+${
            newScores[Players.You] - oldScores[Players.You]
          }🍫 from 🎃 Pumpkin played`,
        ],
        type: ScoreLogType.Card_Played,
        icon: null,
      };
      break;
    case CropId.Quelites:
      newScores = score_on_quelites_played(oldScores, card.modifier);
      scoringLog = {
        name: "Player",
        description: [
          `+${
            newScores[Players.You] - oldScores[Players.You]
          }🍫 from 🌱 Quelites played`,
        ],
        type: ScoreLogType.Card_Played,
        icon: null,
      };
      break;
    case CropId.RedCorn:
      newScores = score_on_red_corn_played(oldScores, card.modifier);
      scoringLog = {
        name: "Player",
        description: [
          `+${
            newScores[Players.You] - oldScores[Players.You]
          }🍫 from 🥕 Red Corn played`,
        ],
        type: ScoreLogType.Card_Played,
        icon: null,
      };
      break;
    case CropId.Tomatillo:
      newScores = score_on_tomatillo_played(oldScores, card.modifier);
      scoringLog = {
        name: "Player",
        description: [
          `+${
            newScores[Players.You] - oldScores[Players.You]
          }🍫 from 🍈 Tomatillo played`,
        ],
        type: ScoreLogType.Card_Played,
        icon: null,
      };
      break;
    case CropId.Tomatoe:
      newScores = score_on_tomatoe_played(oldScores, card.modifier);
      scoringLog = {
        name: "Player",
        description: [
          `+${
            newScores[Players.You] - oldScores[Players.You]
          }🍫 from 🍅 Tomatoe played`,
        ],
        type: ScoreLogType.Card_Played,
        icon: null,
      };
      break;
    case GoodId.Cactus:
      newScores = score_on_cactus_played(oldScores, card.modifier);
      scoringLog = {
        name: "Player",
        description: [
          `+${
            newScores[Players.You] - oldScores[Players.You]
          }🍫 from 🌵 Cactus played`,
        ],
        type: ScoreLogType.Card_Played,
        icon: null,
      };
      break;
    case GoodId.Coatlicue:
      newScores = score_on_coatlicue_played(oldScores, card.modifier);
      scoringLog = {
        name: "Player",
        description: [
          `+${
            newScores[Players.You] - oldScores[Players.You]
          }🍫 from 🏺 Coatlicue played`,
        ],
        type: ScoreLogType.Card_Played,
        icon: null,
      };
      break;
    case GoodId.Cricket:
      newScores = score_on_cricket_played(oldScores, card.modifier);
      scoringLog = {
        name: "Player",
        description: [
          `+${
            newScores[Players.You] - oldScores[Players.You]
          }🍫 from 🦗 Cricket played`,
        ],
        type: ScoreLogType.Card_Played,
        icon: null,
      };
      break;
    case GoodId.Huitlacoche:
      newScores = score_on_huitlacoche_played(oldScores, card.modifier);
      scoringLog = {
        name: "Player",
        description: [
          `+${
            newScores[Players.You] - oldScores[Players.You]
          }🍫 from 🍄 Huitlacoche played`,
        ],
        type: ScoreLogType.Card_Played,
        icon: null,
      };
      break;
    case GoodId.Maguey:
      newScores = score_on_maguey_played(oldScores, card.modifier);
      scoringLog = {
        name: "Player",
        description: [
          `+${
            newScores[Players.You] - oldScores[Players.You]
          }🍫 from 🦚 Maguey played`,
        ],
        type: ScoreLogType.Card_Played,
        icon: null,
      };
      break;
    case GoodId.Manure:
      newScores = score_on_manure_played(oldScores, card.modifier);
      scoringLog = {
        name: "Player",
        description: [
          `+${
            newScores[Players.You] - oldScores[Players.You]
          }🍫 from 💩 Manure played`,
        ],
        type: ScoreLogType.Card_Played,
        icon: null,
      };
      break;
    case GoodId.Shovel:
      newScores = score_on_shovel_played(oldScores, card.modifier);
      scoringLog = {
        name: "Player",
        description: [
          `+${
            newScores[Players.You] - oldScores[Players.You]
          }🍫 from 🧹 Shovel played`,
        ],
        type: ScoreLogType.Card_Played,
        icon: null,
      };
      break;
    case GoodId.Tlaloc:
      newScores = score_on_tlaloc_played(oldScores, card.modifier);
      scoringLog = {
        name: "Player",
        description: [
          `+${
            newScores[Players.You] - oldScores[Players.You]
          }🍫 from 🌧 Tlaloc played`,
        ],
        type: ScoreLogType.Card_Played,
        icon: null,
      };
      break;
    default:
      throw Error(`${card.name}: scoring not implemented`);
      break;
  }
  return { scores: newScores, scoringLog };
};
