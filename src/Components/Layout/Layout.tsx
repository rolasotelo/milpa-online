import React, { ReactNode } from "react";
import logo from "./../../../static/logo.png";
import buttons from "../../../static/buttons.svg";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div className="bg-mexicanBone min-h-screen">
      <div className="bg-mexicanBlue">
        <div className="container mx-auto p-2">
          <nav className="flex justify-between text-mexicanPink">
            <div className="self-center">
              <button
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundImage: `url(${buttons}#menu-up-usage)`,
                }}
              ></button>
            </div>
            <div>
              <a href="/">
                <img src={logo} className="h-10" />
              </a>
            </div>
            <div className="self-center">
              <a href="#">Leaderboard</a>
            </div>
          </nav>
        </div>
      </div>
      <div className="max-w-6xl flex flex-col  py-5 mx-auto">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
