import { io } from "socket.io-client";
import { MiSocket } from "../types";

const URL = "http://localhost:3000";

const newSocket = (gameCode: string, nickname: string | undefined) => {
  const socket: MiSocket = io(URL, {
    autoConnect: false,
    query: { gameCode },
    auth: { nickname },
  });

  socket.onAny((event, ...args) => {
    console.log(event, args);
  });

  return socket;
};

export default newSocket;
