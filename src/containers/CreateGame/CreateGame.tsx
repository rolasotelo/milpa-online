import React from "react";

interface Props {
  onClickCreate: () => void;
  text: string;
}

function CreateGame(props: Props) {
  const { onClickCreate, text } = props;
  return (
    <div className="w-20.38rem md:w-27.5rem h-32.5rem bg-create-background ring-8 ring-inset ring-black m-5">
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-button-pink w-52 h-24 mt-4 focus:outline-none focus:bg-button-pink-pressed pl-3 pb-2 focus:pl-2 focus:pb-1"
          onClick={onClickCreate}
          style={{
            fontFamily: "goodlife-sans-condensed, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "2rem",
          }}
        >
          {text.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default CreateGame;