import Match from "@rolasotelo/milpa-ruleset/dist/classes/Match";
import React from "react";
import { MiSocket } from "../../../common/interfaces";
import { MatchEvent } from "../../../common/enums";

export default function handleStartGame(
  roomCode: string,
  match: Match | undefined,
  setMatch: React.Dispatch<React.SetStateAction<Match | undefined>>,
  socket: MiSocket
): void {
  const sessionID = sessionStorage.getItem("sessionID");
  match?.startGame();

  const newMatchToRerender = new Match(
    roomCode,
    match?.getInfoNecessaryToCloneGame()
  );
  newMatchToRerender.localPlayerId = socket.userID!;

  socket.emit(
    MatchEvent.Start_Game_Handshake,
    sessionID,
    newMatchToRerender.getInfoNecessaryToCloneGame()
  );

  setMatch(newMatchToRerender);
}
