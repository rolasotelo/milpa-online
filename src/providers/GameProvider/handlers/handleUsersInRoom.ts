import React from "react";
import Match from "@rolasotelo/milpa-ruleset/dist/classes/Match";
import createMatch from "@rolasotelo/milpa-ruleset";
import { Player } from "../../../common/types";

export default function handleUsersInRoom(
  players: ReadonlyArray<Player>,
  setMatch: React.Dispatch<React.SetStateAction<Match | undefined>>
): void {
  /*
  If the session saved at the server contains only one player, and you are the
  one receiving this message, then you must create a new match. And add yourself
  as the owner.
   */
  if (players.length === 1) {
    const matchOwner = players[0];
    const newMatch = createMatch(matchOwner.roomCode!);
    newMatch.addPlayer(matchOwner.userID!, matchOwner.nickname, true, true);

    setMatch(newMatch);
  }
}
