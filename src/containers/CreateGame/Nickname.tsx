import React from "react";

interface Props {
  nickname: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  greeting: string;
}

function Nickname(props: Props) {
  const { nickname, greeting, onChange } = props;
  return (
    <div
      className="w-20.38rem md:w-49.81rem h-4.38rem mx-auto flex justify-around bg-green-banner-mobile md:bg-green-banner p-2"
      style={{
        fontFamily: "goodlife-sans-condensed, sans-serif",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "2rem",
      }}
    >
      <div
        className="self-center mb-2 ml-6"
        style={{
          color: "white",
        }}
      >
        <a href="/play">{greeting.toUpperCase()}</a>
      </div>
      <div className="ml-2">
        <input
          className=" placeholder-gray-500 placeholder-opacity-100 focus:outline-none bg-transparent"
          placeholder="Gabinka?"
          value={nickname}
          onChange={(event) => {
            onChange(event);
          }}
        />
      </div>
    </div>
  );
}

export default Nickname;
