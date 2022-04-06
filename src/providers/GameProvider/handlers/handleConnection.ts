import { MiSocket } from "../../../common/interfaces";

export default function handleConnection(
  socket: MiSocket,
  nickname: string
): void {
  const sessionID = sessionStorage.getItem("sessionID");

  if (sessionID) {
    // eslint-disable-next-line no-param-reassign
    socket.auth = { sessionID, nickname };
    socket.connect();
  } else {
    socket.connect();
  }
}
