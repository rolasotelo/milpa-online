import { io } from "socket.io-client";
import { MiSocket } from "../../Realms/Pure/types";

const URL = "https://bbdc-2806-2f0-9180-a5a1-5954-e925-b5b1-8d19.ngrok.io";

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
