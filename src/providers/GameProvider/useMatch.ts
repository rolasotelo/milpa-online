// TODO remove eslint-disable when possible
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import Match from "@rolasotelo/milpa-ruleset/dist/classes/Match";
import Card from "@rolasotelo/milpa-ruleset/dist/classes/cards/Card";
import useTimeout from "./useTimeout";
import { MatchEvent } from "../../common/enums";
import {
  handleConnection,
  handleConnectionError,
  handleNewUserConnected,
  handleRoomFilled,
  handleSessionSaved,
  handleStartGame,
  handleStartGameHandshake,
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

    socket.on(MatchEvent.Connection_Error, (err: Error) => {
      handleConnectionError(err);
    });

    socket.on(MatchEvent.Session_Saved, (playerPayload: Readonly<Player>) => {
      handleSessionSaved(playerPayload, socket, setNickname, setRoomCode);
    });

    socket.on(
      MatchEvent.Users_In_Room,
      (playersPayload: ReadonlyArray<Player>) => {
        handleUsersInRoom(playersPayload, setMatch);
      }
    );

    socket.on(MatchEvent.Room_Filled, () => {
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

    socket.on(MatchEvent.New_User_Connected, addPlayerToMatch);

    function startGame() {
      handleStartGame(roomCode, match, setMatch, socket);
    }

    socket.on(MatchEvent.Start_Game, startGame);

    const listenerStartGameHandshake = (gameStatus: any) => {
      handleStartGameHandshake(roomCode, setMatch, gameStatus, socket);
    };
    socket.on(MatchEvent.Start_Game_Handshake, listenerStartGameHandshake);

    return () => {
      socket.off(MatchEvent.New_User_Connected, addPlayerToMatch);
      socket.off(MatchEvent.Start_Game, startGame);
    };
  }, [match, socket, roomCode]);

  useEffect(() => {
    history.push(`/play/${roomCode}`, { nickname });
  }, [history, nickname, roomCode]);

  const isGameOngoing = match ? match.isGameOngoing : false;

  const { isGoingToRedirect } = useTimeout(nickname, socket, isGameOngoing);

  const nicknames = useMemo(() => {
    let foeNickname = "...";
    let youNickname = nickname;

    if (match) {
      const players = match?.getInfo().players!;
      Object.keys(players).forEach((playerId: string) => {
        if (playerId !== socket.userID!)
          foeNickname = players[playerId].nickname;
        if (playerId === socket.userID!)
          youNickname = players[playerId].nickname;
      });
      if (match?.isGameOwner) {
        youNickname += " 👑";
      } else {
        foeNickname += " 👑";
      }
    }

    return { youNickname, foeNickname };
  }, [nickname, match, socket]);

  const goodsHand = useMemo(() => {
    let hand: Card[] = [];
    if (match && isGameOngoing) hand = [...match.goodHand];
    return hand;
  }, [isGameOngoing, match]);

  const cropsHand = useMemo(() => {
    let hand: Card[] = [];
    if (match && isGameOngoing) hand = [...match.cropHand];
    return hand;
  }, [isGameOngoing, match]);

  return {
    isGameOngoing,
    isGoingToRedirect,
    nickname,
    roomCode,
    localNickname: nicknames.youNickname,
    remoteNickname: nicknames.foeNickname,
    cropsHand,
    goodsHand,
  };
}
