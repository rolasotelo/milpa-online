import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  players: { local: string | undefined; remote: string };
}

function GameLayout(props: Props) {
  const { players, children } = props;
  return (
    <div className="bg-milpaBeige-default min-h-screen flex flex-col">
      <div className="bg-milpaBlue-default">
        <div className="container mx-auto p-2">
          <nav className="flex justify-between text-milpaBeige-default">
            <div
              className="self-center w-5/12"
              style={{
                fontFamily: "goodlife-sans-condensed, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "2rem",
              }}
            >
              {`${players.local?.toUpperCase()}`}
            </div>
            <div>
              <div
                className="self-center w-2/12 text-milpaPink-default"
                style={{
                  fontFamily: "goodlife-sans-condensed, sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "2rem",
                  textAlign: "center",
                }}
              >
                VS
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
              {players.remote
                ? `${players.remote.toUpperCase()}`
                : "Waiting..."}
            </div>
          </nav>
        </div>
      </div>
      <div className="max-w-7xl w-full flex-auto flex flex-col justify-center py-4 mx-auto h-full">
        {children}
      </div>
    </div>
  );
}

export default GameLayout;
