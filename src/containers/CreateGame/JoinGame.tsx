import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { PropsWithChildren } from "../../common/interfaces";

interface Props {
  onClickJoin: (code: string) => void;
}

function JoinButton(props: { onClick: () => void; text: string }) {
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

function Layout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <div className="relative z-10 w-20.38rem tablet:w-27.5rem h-32.5rem bg-join-background ring-8 ring-inset ring-milpaBlue-dark m-5">
      <div className="absolute left-3 top-3 bg-symbol-corner-1 w-8 h-8" />
      <div className="absolute right-3 top-3 bg-symbol-corner-4 w-8 h-8" />
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

function JoinGame(props: Props) {
  const { onClickJoin } = props;
  const [gameCode, setGameCode] = useState("");
  const { t } = useTranslation();
  const handleClick = React.useCallback(() => {
    onClickJoin(gameCode);
  }, [onClickJoin, gameCode]);
  const handleChange = React.useCallback((event) => {
    setGameCode(event.target.value);
  }, []);
  return (
    <Layout>
      <div className="mx-auto">
        <JoinButton onClick={handleClick} text={t("play.join.button")} />
      </div>
      <div className="mx-auto">
        <input
          className="z-40 placeholder-milpaBeige-default placeholder-opacity-100 h-input-3d w-input-3d text-center bg-pink-input bg-milpaBlue-default focus:outline-none text-milpaBeige-default"
          placeholder={t("play.join.paste")}
          value={gameCode}
          onChange={handleChange}
        />
      </div>
    </Layout>
  );
}

export default JoinGame;
