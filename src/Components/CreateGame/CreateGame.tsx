import React from "react";

interface Props {
  onClickCreate: () => void;
}

const CreateGame = (props: Props) => {
  return (
    <div className="w-20.38rem md:w-27.5rem h-32.5rem bg-create-background ring-8 ring-inset ring-black m-5">
      <div className="flex justify-center">
        <button
          className="bg-button-pink w-52 h-24 mt-4 focus:outline-none focus:bg-button-pink-pressed pl-3 pb-2 focus:pl-2 focus:pb-1"
          onClick={props.onClickCreate}
          style={{
            fontFamily: "goodlife-sans-condensed, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "2.8rem",
          }}
        >
          CREATE
        </button>
      </div>
    </div>
  );
};

export default CreateGame;
