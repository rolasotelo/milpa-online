import React from "react";
import JoinGameImage from "../../../static/join-game.png";

interface Props {}

const JoinGame = (props: Props) => {
  return (
    <div
      className="w-80 h-96 bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${JoinGameImage})` }}
    >
      <div className="flex flex-col">
        <div className="mx-auto">
          <button className="bg-white border-4 border-mexicanPink rounded-full px-2 my-4">
            JOIN
          </button>
        </div>
        <div className="mx-auto">
          <input
            className="placeholder-gray-500 placeholder-opacity-100 ..."
            placeholder="dkfgSDF3466GF"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinGame;
