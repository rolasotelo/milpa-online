import { MONTHS } from "../../../constants";
import { ScoreLogType } from "../../../enums";
import { ScoringHistory } from "../../../types";
import React from "react";

export const generate_start_of_turn_log = (turn: number): ScoringHistory => {
  return {
    name: `Turn ${turn}`,
    description: [`${MONTHS[turn - 1]}`],
    type: ScoreLogType.Turn,
    icon: () => {
      return <div>{turn}</div>;
    },
  };
};
