import React, { ReactNode } from "react";
import { useHistory } from "react-router-dom";

interface Props {
  children: ReactNode;
  players: { local: string; remote: string };
}

const LayoutGame = (props: Props) => {
  const h = useHistory();
  return (
    <div className="bg-mexicanBone min-h-screen">
      <div className="bg-mexicanBlue">
        <div className="container mx-auto p-2">
          <nav className="flex justify-between text-mexicanPink">
            <div
              className="self-center"
              style={{
                fontFamily: "goodlife-sans-condensed, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "2rem",
              }}
            >
              <a href="#">{props.players.local?.toUpperCase()}</a>
            </div>
            <div>
              <button
                onClick={() => {
                  h.push("/");
                }}
                className="bg-button-logo focus:bg-button-logo-pressed focus:outline-none"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              ></button>
            </div>
            <div
              className="self-center"
              style={{
                fontFamily: "goodlife-sans-condensed, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "2rem",
              }}
            >
              <a href="#">{props.players.remote?.toUpperCase()}</a>
            </div>
          </nav>
        </div>
      </div>
      <div className="max-w-6xl flex flex-col justify-center py-5 mx-auto">
        {props.children}
      </div>
    </div>
  );
};

export default LayoutGame;
