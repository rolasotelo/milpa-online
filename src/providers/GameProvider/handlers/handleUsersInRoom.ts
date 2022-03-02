import React from "react";
import Match from "@rolasotelo/milpa-ruleset/dist/classes/Match";
import createMatch from "@rolasotelo/milpa-ruleset";
import { Player } from "../../../common/types";

export default function handleUsersInRoom(
  players: ReadonlyArray<Player>,
  setMatch: React.Dispatch<React.SetStateAction<Match>>
): void {
  if (players.length === 1) {
    setMatch(createMatch(players[0].roomCode!));
  }
}
