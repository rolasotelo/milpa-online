import { compute_boards_for_display } from "..";
import { EMPTYGAMESTATUS, WAITING_PLAYER } from "../../../constants";
import { GameStatus, Player } from "../../../types";
import { Corn, EmptySlot, Tlaloc } from "../../cards";

test("should return milpas from game status with isYourMilpa attribute", () => {
  const USERID = "123456789";
  const USERIDFOROPPONENT = "987654321";
  const yourMilpa = {
    milpa: [[EmptySlot]],
    edges: [[EmptySlot]],
  };
  const opponentsMilpa = {
    milpa: [[Corn]],
    edges: [[Tlaloc]],
  };
  const you: Readonly<Player> = {
    nickname: "Gabinka",
    self: true,
    connected: true,
    userID: USERID,
    gameStatus: {
      ...EMPTYGAMESTATUS,
      playerInTurnID: USERID,
      boards: {
        [USERID]: { ...yourMilpa },
        [USERIDFOROPPONENT]: { ...opponentsMilpa },
      },
    },
  };
  const players: Readonly<[Player, Player]> = [
    { ...you },
    { ...WAITING_PLAYER, userID: USERIDFOROPPONENT },
  ];
  const [yourMilpaForDisplay, opponentsMilpaForDisplay] =
    compute_boards_for_display(players);
  expect(yourMilpaForDisplay!.isYourMilpa).toBeTruthy();
  expect(yourMilpaForDisplay!.board).toEqual(yourMilpa);
  expect(opponentsMilpaForDisplay!.isYourMilpa).toBeFalsy();
  expect(opponentsMilpaForDisplay!.board).toEqual(opponentsMilpa);
});

test("should return undefined if game status or user id is undefined", () => {
  const you: Readonly<Player> = {
    nickname: "Gabinka",
    self: true,
    connected: true,
  };
  const players: Readonly<[Player, Player]> = [
    { ...you },
    { ...WAITING_PLAYER },
  ];
  const [yourMilpaForDisplay, opponentsMilpaForDisplay] =
    compute_boards_for_display(players);
  expect(yourMilpaForDisplay).toBeUndefined();
  expect(opponentsMilpaForDisplay).toBeUndefined();
});
