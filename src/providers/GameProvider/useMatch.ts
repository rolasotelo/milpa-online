// TODO remove eslint-disable when possible
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import Match from "@rolasotelo/milpa-ruleset/dist/classes/Match";
import useTimeout from "./useTimeout";
import { Event } from "../../common/enums";
import {
  handleConnection,
  handleConnectionError,
  handleNewUserConnected,
  handleRoomFilled,
  handleSessionSaved,
  handleUsersInRoom,
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

  const [match, setMatch] = useState<Match | undefined>(undefined);

  useEffect(() => {
    handleConnection(socket, nickname);

    socket.on(Event.Connection_Error, (err: Error) => {
      handleConnectionError(err);
    });

    socket.on(Event.Session_Saved, (playerPayload: Readonly<Player>) => {
      handleSessionSaved(playerPayload, socket, setNickname, setRoomCode);
    });

    socket.on(Event.Users_In_Room, (playersPayload: ReadonlyArray<Player>) => {
      handleUsersInRoom(playersPayload, setMatch);
    });

    socket.on(Event.Room_Filled, () => {
      handleRoomFilled(history, nickname);
    });

    return () => {
      socket.disconnect();
    };
  }, [history, nickname, socket]);

  useEffect(() => {
    function addPlayerToMatch(playerPayload: Player) {
      handleNewUserConnected(playerPayload, match, setMatch);
    }

    socket.on(Event.New_User_Connected, addPlayerToMatch);

    return () => {
      socket.off(Event.New_User_Connected, addPlayerToMatch);
    };
  }, [match, socket]);

  useEffect(() => {
    history.push(`/play/${roomCode}`, { nickname });
  }, [history, nickname, roomCode]);

  const isGameOngoing = match ? match.isGameOngoing : false;

  const { isGoingToRedirect } = useTimeout(nickname, socket, isGameOngoing);

  // DELETE
  if (match) {
    console.log(JSON.stringify(match.getInfoNecessaryToCloneGame()));
  }

  return {
    isGameOngoing,
    isGoingToRedirect,
    nickname,
    roomCode,
  };
}
