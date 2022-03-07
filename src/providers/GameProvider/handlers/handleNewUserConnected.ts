import React from "react";
import Match from "@rolasotelo/milpa-ruleset/dist/classes/Match";
import { Player } from "../../../common/types";

export default function handleNewUserConnected(
  player: Player,
  match: Match | undefined,
  setMatch: React.Dispatch<React.SetStateAction<Match | undefined>>
): void {
  match?.addPlayer(player.userID!, player.nickname);

  setMatch(match);
}
