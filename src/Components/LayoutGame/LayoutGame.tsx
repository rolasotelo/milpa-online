import React, { ReactNode } from "react";
import { useHistory } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const LayoutGame = (props: Props) => {
  const h = useHistory();
  return (
    <div className="bg-mexicanBone min-h-screen">
      <div className="bg-mexicanBlue">
        <div className="container mx-auto p-2">
          <nav className="flex justify-between text-mexicanPink">
            <div className="self-center">
              <a href="#">Menu</a>
            </div>
            <div>
              <button
                onClick={() => {
                  h.push("/");
                }}
                className="bg-logo-floating focus:outline-none"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              ></button>
            </div>
            <div className="self-center">
              <a href="#">Rules</a>
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
