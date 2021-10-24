import { WAITING_PLAYER } from "../../../constants";
import { Player } from "../../../types";

export const create_players = (
  connectedPlayer: Readonly<Player>
): Readonly<[Player, Player]> => {
  return [{ ...connectedPlayer }, { ...WAITING_PLAYER }];
};
