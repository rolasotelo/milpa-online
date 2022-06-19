import React from "react";
import Info from "./Info";
import Board from "./Board";

export default function Table() {
  return (
    <div className="flex-auto flex flex-col tablet:flex-row justify-evenly items-center w-full tablet:p-4 bg-milpaGreen-light">
      <Board />
      <Info />
      <Board />
    </div>
  );
}
