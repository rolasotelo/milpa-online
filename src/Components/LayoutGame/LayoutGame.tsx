import React, { ReactNode } from "react";
import { useHistory } from "react-router-dom";

interface Props {
  children: ReactNode;
  players: { local: string | undefined; remote: string };
  yourTurn: boolean;
}

const LayoutGame = (props: Props) => {
  const h = useHistory();
  return (
    <div className="bg-mexicanBone min-h-screen">
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
              <a href="#">{`${props.players.local?.toUpperCase()} : 0 🍫`}</a>
              {props.yourTurn && (
                <a
                  href="#"
                  className="text-mexicanPink ml-6"
                >{`<== YOUR TURN`}</a>
              )}
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
              {!props.yourTurn && props.players.remote && (
                <a
                  href="#"
                  className="text-mexicanPink mr-6"
                >{`YOUR TURN ==>`}</a>
              )}
              <a href="#">
                {props.players.remote
                  ? `0 🍫 : ${props.players.remote?.toUpperCase()}`
                  : "Waiting..."}
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div className="max-w-7xl flex flex-col justify-center py-4 mx-auto">
        {props.children}
      </div>
    </div>
  );
};

export default LayoutGame;
