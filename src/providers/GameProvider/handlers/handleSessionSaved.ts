/* eslint-disable no-param-reassign */
import React from "react";
import { Player } from "../../../common/types";
import { MiSocket } from "../../../common/interfaces";

export default function handleSessionSaved(
  player: Readonly<Player>,
  socket: MiSocket,
  setNickname: React.Dispatch<React.SetStateAction<string>>,
  setRoomCode: React.Dispatch<React.SetStateAction<string>>
): void {
  // attach the session ID to the next reconnection attempts
  socket.auth = { sessionID: player.sessionID, nickname: player.nickname };
  // store it in the localStorage
  sessionStorage.setItem("sessionID", player.sessionID!);
  // save the ID of the user
  socket.userID = player.userID;
  setNickname(player.nickname);
  setRoomCode(player.roomCode!);
}
