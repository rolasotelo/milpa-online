import { MiSocket } from "../../../Pure/types";

export const handleConnection = (
  socket: MiSocket,
  sessionStorage: Storage,
  nickname: string
): void  => {
  const sessionID = sessionStorage.getItem("sessionID");

  if (sessionID) {
    socket.auth = { sessionID, nickname };

    socket.connect();
  } else {
    socket.connect();
  }
};
