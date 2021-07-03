import React from "react";
import CreateGameImage from "../../../static/create-game.png";

interface Props {
  onClickCreate: () => void;
}

const CreateGame = (props: Props) => {
  return (
    <div
      className="w-80 h-96 bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${CreateGameImage})` }}
    >
      <div className="flex justify-center">
        <button
          className="bg-white border-4 border-mexicanPink rounded-full px-2 my-4"
          onClick={props.onClickCreate}
        >
          CREATE
        </button>
      </div>
    </div>
  );
};

export default CreateGame;
