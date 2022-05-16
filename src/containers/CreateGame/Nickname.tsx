import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  nickname: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Greeting() {
  const { t } = useTranslation();
  return (
    <div
      className=" md:ml-6 text-milpaBeige-default"

    >
      <a href="/play">{t("play.greeting").toUpperCase()}</a>
    </div>
  )
}

function NicknameInput(props: Props) {
  const {nickname, onChange} = props;
  const handleClick = React.useCallback(
    (event) => {
      onChange(event);
    }
    ,[onChange])

  return (
    <div className="md:ml-2">
      <input
        className="placeholder-milpaBlue-dark placeholder-opacity-100 focus:outline-none bg-transparent text-milpaBlue-dark"
        placeholder="Gabinka?"
        value={nickname}
        onChange={handleClick}
      />
    </div>
  )
}

function Nickname(props: Props) {
  const { nickname, onChange } = props;

  return (
    <div className='overflow-x-hidden' >
      <div
        className=" w-20.38rem md:w-49.81rem h-4.38rem mx-auto flex justify-around bg-green-banner-mobile md:bg-green-banner md:px-5 pt-6 mt-2 text-2xl md:text-3xl"
        style={{
          fontFamily: "goodlife-sans-condensed, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",

        }}
      >
        <Greeting/>
        <NicknameInput nickname={nickname} onChange={onChange}/>
      </div>
    </div>
  );
}

export default Nickname;
