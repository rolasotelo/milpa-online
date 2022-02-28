import React, { ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { Players } from "../../Realms/Pure/enums";

interface Props {
  children: ReactNode;
  players: { local: string | undefined; remote: string };
  yourTurn: boolean;
  scores: [string, string];
}

const LayoutGame = (props: Props) => {
  const h = useHistory();
  return (
    <div className="bg-mexicanBone min-h-screen flex flex-col">
      <div className="bg-mexicanBlue">
        <div className="container mx-auto p-2">
          <nav className="flex justify-between text-mexicanBone">
            <div
              className="self-center w-5/12"
              style={{
                fontFamily: "goodlife-sans-condensed, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "2rem",
              }}
            >
              <a href="#">{`${props.players.local?.toUpperCase()}`}</a>
            </div>
            <div>
              <div
                className="self-center w-2/12 text-mexicanPink"
                style={{
                  fontFamily: "goodlife-sans-condensed, sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "2rem",
                  textAlign: "center",
                }}
              >
                <a href="#">VS</a>
              </div>
            </div>
            <div
              className="self-center w-5/12"
              style={{
                fontFamily: "goodlife-sans-condensed, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "2rem",
                textAlign: "right",
              }}
            >
              <a href="#">
                {props.players.remote
                  ? `${props.players.remote.toUpperCase()}`
                  : "Waiting..."}
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div className="max-w-7xl w-full flex-auto flex flex-col justify-center py-4 mx-auto h-full">
        {props.children}
      </div>
    </div>
  );
};

export default LayoutGame;
