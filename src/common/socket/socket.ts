import { io } from "socket.io-client";
import { MiSocket } from "../interfaces";

const URL = "http://localhost:3000";

const newSocket = (roomCode: string, nickname: string | undefined) => {
  const socket: MiSocket = io(URL, {
    autoConnect: false,
    query: { gameCode: roomCode },
    auth: { nickname },
  });

  socket.onAny((event, ...args) => {
    // eslint-disable-next-line no-console
    console.log(event, args);
  });

  return socket;
};

export default newSocket;
