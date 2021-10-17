export enum CropId {
  Corn = "corn",
  Beans = "beans",
}

export enum GoodId {
  Tlaloc = "tlaloc",
  Manure = "manure",
}

export enum ModifierId {
  Wet = "wet",
  Empty = "empty",
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
}

export enum Total {
  Corn = 32,
  Beans = 32,
  Manure = 32,
  Tlaloc = 32,
}
