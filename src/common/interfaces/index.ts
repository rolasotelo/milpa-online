import { ReactNode } from "react";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { Socket } from "socket.io-client";

export interface PropsWithChildren {
  children: ReactNode;
}

export interface MiSocket extends Socket<DefaultEventsMap, DefaultEventsMap> {
  userID?: string;
}
