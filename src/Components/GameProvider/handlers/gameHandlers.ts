import {
  GameRoutePropsType,
  MiSocket,
  User,
  Users,
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
    console.log("nickname invalido");
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
export const handleUsers = (
  users: Users,
  setPlayers: React.Dispatch<React.SetStateAction<Users>>,
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

export const handleFirstUserConnection = (
  user: User,
  players: Users,
  setPlayers: React.Dispatch<React.SetStateAction<Users>>
) => {
  initReactiveProperties(user);
  const newPlayers = [...players];
  newPlayers.push(user);
  setPlayers(newPlayers);
};

// TODO look at the mess that is players updating because setPlayers here
export const handleUserConnection = (
  user: User,
  players: Users,
  setPlayers: React.Dispatch<React.SetStateAction<Users>>
) => {
  initReactiveProperties(user);
  console.log("players", players);
  const newPlayers = [...[players[0]]];
  newPlayers.push(user);
  setPlayers(newPlayers);
};

export const handleSession = (
  sessionID: string,
  userID: string,
  nickname: string,
  socket: MiSocket
) => {
  // attach the session ID to the next reconnection attempts
  socket.auth = { sessionID, nickname };
  // store it in the localStorage
  sessionStorage.setItem("sessionID", sessionID);
  // save the ID of the user
  socket.userID = userID;
};
