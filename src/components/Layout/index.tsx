import React, { ReactNode } from "react";
import Navbar from "../Navbar";

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  const { children } = props;
  return (
    <div className="bg-milpaBeige-default min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col mx-auto">{children}</div>
    </div>
  );
}

export default Layout;
