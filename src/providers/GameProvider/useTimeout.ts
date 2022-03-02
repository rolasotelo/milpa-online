import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MiSocket } from "../../common/interfaces";
import { WAITING_TIME } from "../../common/constants";

export default function useTimeout(
  nickname: string,
  socket: MiSocket,
  isGameOngoing: boolean
) {
  const [idTimeout, setIdTimeout] = useState<undefined | NodeJS.Timeout>(
    undefined
  );

  const history = useHistory();

  useEffect(() => {
    if (!isGameOngoing) {
      const id = setTimeout(() => {
        history.push("/play", { nickname });
        sessionStorage.removeItem("sessionID");
        socket.disconnect();
      }, WAITING_TIME * 1000);
      setIdTimeout(id);
    } else if (idTimeout) {
      clearTimeout(idTimeout);
      setIdTimeout(undefined);
    }
    return () => {};
  }, [history, idTimeout, isGameOngoing, nickname, socket]);

  return { isGoingToRedirect: !!idTimeout };
}
