import { Player } from "../../../types";

export const WAITING_PLAYER: Readonly<Player> = {
  self: false,
  connected: false,
  nickname: "Waiting ...",
};

export const create_players = (
  connectedPlayer: Readonly<Player>
): Readonly<[Player, Player]> => {
  return [{ ...connectedPlayer }, { ...WAITING_PLAYER }];
};
