import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  onClickCreate: () => void;

}

function PlayButton(props: { onClick: () => void; text: string }) {
  const { onClick, text } = props;
  return (
    <button
      type="button"
      className="z-10  bg-button-pink mt-4 w-52 h-24  focus:outline-none focus:bg-button-pink-pressed pl-6 pt-5 focus:pl-4 focus:pt-3 text-milpaBlue-dark"
      onClick={onClick}
      style={{
        fontFamily: "goodlife-serif, sans-serif",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "1.75rem",
      }}
    >
      {text}
    </button>
  );
}

function CreateGame(props: Props) {
  const { t } = useTranslation();
  const { onClickCreate} = props;
  return (
    <div className="w-20.38rem md:w-27.5rem h-32.5rem bg-create-background ring-8 ring-inset ring-milpaBlue-dark m-5">
      <div className="flex justify-center">
       <PlayButton onClick={onClickCreate} text={t("play.create.button")}/>
      </div>
    </div>
  );
}

export default CreateGame;
