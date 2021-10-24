import { GameRoutePropsType } from "../../../Pure/types";

export const handleRoomFilled = (
  route: GameRoutePropsType,
  nickname: string
) => {
  // TODO do proper workflow when room filled
  route.history.push("/play", { nickname });
};
