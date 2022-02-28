import { io } from "socket.io-client";
import { MiSocket } from "../../Realms/Pure/types";

const URL = "http://localhost:3000";

const newSocket = (roomCode: string, nickname: string | undefined) => {
  const socket: MiSocket = io(URL, {
    autoConnect: false,
    query: { gameCode: roomCode },
    auth: { nickname }
  });

  socket.onAny((event, ...args) => {
    // console.log(event, args);
  });

  return socket;
};

export default newSocket;
