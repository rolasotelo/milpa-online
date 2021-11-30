import React, { ReactNode } from "react";
import Navbar from "../Navbar";
interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div className="bg-milpaBeige-default min-h-screen">
      <Navbar />
      <div className="flex flex-col mx-auto">{props.children}</div>
    </div>
  );
};

export default Layout;
