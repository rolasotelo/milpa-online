import { io, Socket } from "socket.io-client";

const URL = "http://localhost:3000";

const newSocket = (gameCode: string) => {
  const socket: Socket = io(URL, { autoConnect: false, query: { gameCode } });

  socket.onAny((event, ...args) => {
    console.log(event, args);
  });

  return socket;
};

export default newSocket;