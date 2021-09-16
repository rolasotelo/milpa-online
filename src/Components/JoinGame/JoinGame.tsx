import React, { useState } from "react";
interface Props {
  onClickJoin: (code: string) => void;
}

const JoinGame = (props: Props) => {
  const [gameCode, setGameCode] = useState("");
  return (
    <div className="w-20.38rem md:w-27.5rem h-32.5rem bg-join-background ring-8 ring-inset ring-black m-5">
      <div className="flex flex-col">
        <div className="mx-auto">
          <button
            onClick={() => {
              props.onClickJoin(gameCode);
            }}
            className="bg-button-pink w-52 h-24 mt-4 focus:outline-none focus:bg-button-pink-pressed pl-3 pb-2 focus:pl-2 focus:pb-1"
            style={{
              fontFamily: "goodlife-sans-condensed, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "2.8rem",
            }}
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
