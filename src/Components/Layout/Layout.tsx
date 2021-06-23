import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div>
      <div className="bg-mexicanBlue">
        <div className="container mx-auto  p-5">
          <nav className="flex justify-between text-mexicanPink">
            <div>
              <a href="#">Menu</a>
            </div>
            <div>
              <a href="#">Logo</a>
            </div>
            <div>
              <a href="#">Leaderboard</a>
            </div>
          </nav>
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
