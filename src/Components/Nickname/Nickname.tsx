import React from "react";

interface Props {
  nickname: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Nickname = (props: Props) => {
  return (
    <div className="w-20.38rem md:w-49.81rem h-4.38rem mx-auto flex justify-around bg-green-banner-mobile md:bg-green-banner p-3">
      <div className="self-center">
        <a href="/play">Ahoj</a>
      </div>
      <div>
        <input
          className="placeholder-gray-500 placeholder-opacity-100 ..."
          placeholder="Gabinka?"
          value={props.nickname}
          onChange={(event) => {
            props.onChange(event);
          }}
        />
      </div>
    </div>
  );
};

export default Nickname;
