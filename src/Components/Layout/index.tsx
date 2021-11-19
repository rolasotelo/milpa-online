import React, { ReactNode } from "react";
import Navbar from "../Navbar";
interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div className="bg-milpaBeige-default min-h-screen">
      <Navbar />
      <div className="max-w-6xl flex flex-col  py-2 mx-auto">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
