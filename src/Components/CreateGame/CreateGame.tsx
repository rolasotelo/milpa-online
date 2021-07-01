import React from "react";
import CreateGameImage from "../../../static/create-game.png";

interface Props {}

const CreateGame = (props: Props) => {
  return (
    <div
      className="w-80 h-96 bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${CreateGameImage})` }}
    >
      Create Game
    </div>
  );
};

export default CreateGame;
