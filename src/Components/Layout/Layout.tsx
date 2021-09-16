import React, { ReactNode } from "react";
import { useHistory } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const h = useHistory();
  return (
    <div className="bg-mexicanBone min-h-screen">
      <div className="bg-mexicanBlue">
        <div className="container mx-auto p-2">
          <nav className="flex justify-between text-mexicanPink">
            <div className="self-center">
              <button
                className="bg-button-menu focus:bg-button-menu-pressed focus:outline-none"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              ></button>
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
            <div className="self-center">
              <button
                className="bg-button-leaderboard focus:bg-button-leaderboard-pressed focus:outline-none"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              ></button>
            </div>
          </nav>
        </div>
      </div>
      <div className="max-w-6xl flex flex-col  py-6 mx-auto">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
