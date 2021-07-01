import React from "react";
import JoinGameImage from "../../../static/join-game.png";

interface Props {}

const JoinGame = (props: Props) => {
  return (
    <div
      className="w-80 h-96 bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${JoinGameImage})` }}
    >
      Join Game
    </div>
  );
};

export default JoinGame;
