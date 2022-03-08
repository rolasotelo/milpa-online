export enum MatchEvent {
  Connection_Error = "connect_error",
  Session_Saved = "session saved",
  Users_In_Room = "users in room",
  Room_Filled = "room filled",
  New_User_Connected = "new user connected",
  Start_Game = "start game",
  Start_Game_Handshake = "start game handshake",
  Player_Disconnection = "player disconnected",
  Ok_Start_Game = "ok start game",
  End_Of_Handshake = "end of handshake",
  Start_Update_Board = "start update board",
  End_Update_Board = "end update board",
}

export const enum ScoreLogType {
  Card_Played = "card played",
  End_Of_Turn = "end of turn",
  Final_Score = "final score",
  Total_Score = "total score",
  Turn = "turn",
}
