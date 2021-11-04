export enum CropId {
  Corn = "corn",
  Beans = "beans",
  BlueCorn = "blueCorn",
  Chilli = "chilli",
  Tomatillo = "tomatillo",
  Tomatoe = "tomatoe",
  Quelites = "quelites",
  RedCorn = "redCorn",
  Pupmkin = "pumpkin",
}

export enum GoodId {
  Tlaloc = "tlaloc",
  Manure = "manure",
  Shovel = "shovel",
  Maguey = "maguey",
  Cactus = "cactus",
  Coatlicue = "coatlicue",
  Cricket = "cricket",
  Huitlacoche = "huitlacoche",
}

export enum ModifierId {
  Wet = "wet",
  Empty = "empty",
  Manure = "manure",
  Huitlacoche = "huitlacoche",
}

export enum CardType {
  Crop = "crop",
  Good = "good",
  Empty = "empty",
}

export enum SlotType {
  Milpa = "milpa",
  Edge = "edge",
}

export enum Row {
  First,
  Second,
  Third,
  Fourth,
}

export enum Column {
  First,
  Second,
  Third,
  Fourth,
}

export enum Edge {
  Top,
  Down,
  Left,
  Right,
}

export enum Position {
  First,
  Second,
  Third,
  Fourth,
}

export enum Players {
  You,
  Opponent,
}

export enum Card {
  First,
  Second,
  Third,
  Fourth,
}

export enum Event {
  Connection_Error = "connect_error",
  Session_Saved = "session saved",
  Users_In_Room = "users in room",
  Room_Filled = "room filled",
  Start_Game = "start game",
  Start_Game_Handshake = "start game handshake",
  Player_Disconnection = "player disconnected",
  Ok_Start_Game = "ok start game",
  End_Of_Handshake = "end of handshake",
  Start_Update_Board = "start update board",
  End_Update_Board = "end update board",
}

export enum Total {
  Corn = 14,
  Beans = 8,
  BlueCorn = 8,
  Chilli = 6,
  Tomatillo = 4,
  Tomatoe = 7,
  Quelites = 5,
  RedCorn = 8,
  Pumpkin = 4,

  Manure = 8,
  Tlaloc = 8,
  Shovel = 2,
  Maguey = 12,
  Cactus = 8,
  Coatlicue = 3,
  Cricket = 2,
  Huitlacoche = 5,
}

export const enum ScoreLogType {
  Card_Played = "card played",
  End_Of_Turn = "end of turn",
  Final_Score = "final score",
  Total_Score = "total score",
  Turn = "turn",
}
