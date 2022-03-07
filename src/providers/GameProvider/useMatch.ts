// TODO remove eslint-disable when possible
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useTimeout from "./useTimeout";
import { Event } from "../../common/enums";

import {
  handleConnection,
  handleConnectionError,
  handleSessionSaved,
} from "./handlers";
import { MiSocket } from "../../common/interfaces";
import { Player } from "../../common/types";

export default function useMatch(
  initialRoomCode: string,
  initialNickname: string,
  socket: MiSocket
) {
  const history = useHistory();

  const [nickname, setNickname] = useState(initialNickname);
  const [roomCode, setRoomCode] = useState(initialRoomCode);

  const [isGameOngoing, setIsGameOngoing] = useState(false);
  const [match, setMatch] = useState(undefined);

  const { isGoingToRedirect } = useTimeout(nickname, socket, isGameOngoing);

  useEffect(() => {
    handleConnection(socket, nickname);

    socket.on(Event.Connection_Error, (err: Error) => {
      handleConnectionError(err);
    });

    socket.on(Event.Session_Saved, (playerPayload: Readonly<Player>) => {
      handleSessionSaved(playerPayload, socket, setNickname, setRoomCode);
    });

    return () => {
      socket.disconnect();
    };
  }, [nickname, socket]);

  useEffect(() => {
    history.push(`/play/${roomCode}`, { nickname });
  }, [history, nickname, roomCode]);

  return {
    isGameOngoing,
    isGoingToRedirect,
    nickname,
    roomCode,
  };
}
