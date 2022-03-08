import Match from "@rolasotelo/milpa-ruleset/dist/classes/Match";
import React from "react";
import { MiSocket } from "../../../common/interfaces";
import { MatchEvent } from "../../../common/enums";

export default function handleStartGameHandshake(
  roomCode: string,
  setMatch: React.Dispatch<React.SetStateAction<Match | undefined>>,
  gameStatus: any,
  socket: MiSocket
) {
  const newMatch = new Match(roomCode, gameStatus);
  newMatch.localPlayerId = socket.userID!;
  const sessionID = sessionStorage.getItem("sessionID");

  setMatch(newMatch);
  socket.emit(MatchEvent.End_Of_Handshake, sessionID, gameStatus);
}
