import { Socket } from "socket.io-client";
import {
  dealCropsHand,
  dealGoodsHand,
  newGame,
} from "../../../common/game/game";
import {
  GameRoutePropsType,
  GameStatus,
  Milpa,
  MiSocket,
  User,
} from "../../../common/types";

const initReactiveProperties = (user: User) => {
  user.connected = true;
  user.messages = [];
  user.hasNewMessages = false;
  user.self = false;
};

export const handleConnectionOrReconnection = (
  socket: MiSocket,
  sessionStorage: Storage,
  nickname: string
) => {
  const sessionID = sessionStorage.getItem("sessionID");

  if (sessionID) {
    socket.auth = { sessionID, nickname };
    socket.connect();
  } else {
    socket.connect();
  }
};

export const handleConnectionError = (err: Error) => {
  // TODO handle connection error
  if (err.message === "invalid nickname") {
  }
};

export const handleRoomFilled = (
  route: GameRoutePropsType,
  nickname: string
) => {
  // TODO do proper workflow when room filled
  route.history.push("/play", { nickname });
};

export const handleStartGame = (
  players: User[],
  setPlayers: React.Dispatch<React.SetStateAction<User[]>>,
  sessionID: string,
  users: User[],
  socket: MiSocket
) => {
  const sessionID2 = sessionStorage.getItem("sessionID");
  if (!users[0].gameStatus) {
    const score: Map<string, number> = new Map();
    score.set(users[0].userID!, 0);
    score.set(users[1].userID!, 0);
    const { cropsDeck, goodsDeck, emptyMilpa, sampleMilpa } = newGame();
    const { cropsHand: newCropsHand, newCropsDeck } = dealCropsHand(cropsDeck);
    const { goodsHand: newGoodsHand, newGoodsDeck } = dealGoodsHand(goodsDeck);
    const milpas: Map<string, Milpa> = new Map();
    milpas.set(users[0].userID!, emptyMilpa);
    milpas.set(users[1].userID!, sampleMilpa);

    const startGameStatus: GameStatus = {
      playerTurn: users[0].userID!,
      score,
      cropsDeck: newCropsDeck,
      goodsDeck: newGoodsDeck,
      cropsHand: newCropsHand,
      goodsHand: newGoodsHand,
      milpas,
    };
    socket.emit("start game handshake", sessionID2, startGameStatus);
    const newPlayers: User[] = [
      { ...users[0], gameStatus: startGameStatus },
      { ...users[1], gameStatus: startGameStatus },
    ];
    setPlayers(newPlayers);
  } else {
    const gameStatus = users[0].gameStatus;
    const newPlayers: User[] = [
      { ...users[0], gameStatus: gameStatus },
      { ...users[1], gameStatus: gameStatus },
    ];
    setPlayers(newPlayers);
    socket.emit("start game handshake", sessionID2, gameStatus);
  }
};

export const handleStartGameHandshake = (
  players: User[],
  setPlayers: React.Dispatch<React.SetStateAction<User[]>>,
  gameStatus: GameStatus,
  socket: MiSocket
) => {
  const sessionID2 = sessionStorage.getItem("sessionID");

  socket.emit("end of handshake", sessionID2, gameStatus);
  const newPlayers: User[] = [
    { ...players[0], gameStatus: gameStatus },
    { ...players[1], gameStatus: gameStatus },
  ];
  setPlayers(newPlayers);
};

export const handleOkStartGame = (
  setIsPlaying: (value: React.SetStateAction<boolean>) => void
) => {
  setIsPlaying(true);
};

export const handleRestartGame = (
  setIsPlaying: (value: React.SetStateAction<boolean>) => void
) => {
  setIsPlaying(true);
};

export const handlePlayerDisconnection = (
  setIsPlaying: (value: React.SetStateAction<boolean>) => void
) => {
  setIsPlaying(false);
};

// + existing users in room
export const handleUsersInRoom = (
  users: User[],
  setPlayers: React.Dispatch<React.SetStateAction<User[]>>,
  socket: MiSocket
) => {
  users.forEach((user) => {
    initReactiveProperties(user);

    user.self = user.userID === socket.userID;
  });
  const newPlayers = users.sort((a, b) => {
    if (a.self) return -1;
    if (b.self) return 1;
    if (a.nickname < b.nickname) return -1;
    return a.nickname > b.nickname ? 1 : 0;
  });
  setPlayers(newPlayers);
};

export const handleFirstUserConnection = (user: User) => {
  initReactiveProperties(user);
};

// TODO look at the mess that is players updating because setPlayers here
export const handleUserConnection = (
  user: User,
  players: User[],
  setPlayers: React.Dispatch<React.SetStateAction<User[]>>
) => {
  initReactiveProperties(user);
  const newPlayers = [...[players[0]]];
  newPlayers.push(user);
  setPlayers(newPlayers);
};

export interface UserPlusSessionID extends User {
  sessionID: string;
}

export const handleSessionSaved = (
  user: UserPlusSessionID,
  socket: MiSocket
) => {
  // attach the session ID to the next reconnection attempts
  socket.auth = { sessionID: user.sessionID, nickname: user.nickname };
  // store it in the localStorage
  sessionStorage.setItem("sessionID", user.sessionID);
  // save the ID of the user
  socket.userID = user.userID;
};
