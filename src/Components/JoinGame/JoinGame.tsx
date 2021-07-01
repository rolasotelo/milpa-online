import React from "react";
import JoinGameImage from "../../../static/join-game.png";

interface Props {}

const JoinGame = (props: Props) => {
  return (
    <div
      className="w-80 h-96 bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${JoinGameImage})` }}
    >
      <div className="flex justify-center">
        <button className="bg-white border-4 border-mexicanPink rounded-full px-2 my-4">
          JOIN
        </button>
      </div>
    </div>
  );
};

export default JoinGame;
