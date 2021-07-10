import React from "react";

interface Props {
  nickname: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Nickname = (props: Props) => {
  return (
    <div className="max-w-md w-1/4 mx-auto flex justify-around bg-mexicanGreen-light p-3">
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
