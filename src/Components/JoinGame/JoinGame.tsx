import React, { useState } from "react";
import JoinGameImage from "../../../static/join-game.png";

interface Props {
  onClickJoin: (code: string) => void;
}

const JoinGame = (props: Props) => {
  const [gameCode, setGameCode] = useState("");
  return (
    <div
      className="w-80 h-96 bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${JoinGameImage})` }}
    >
      <div className="flex flex-col">
        <div className="mx-auto">
          <button
            onClick={() => {
              props.onClickJoin(gameCode);
            }}
            className="bg-white border-4 border-mexicanPink rounded-full px-2 my-4"
          >
            JOIN
          </button>
        </div>
        <div className="mx-auto">
          <input
            className="placeholder-gray-500 placeholder-opacity-100 ..."
            placeholder="Paste game code"
            value={gameCode}
            onChange={(event) => {
              setGameCode(event.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default JoinGame;
