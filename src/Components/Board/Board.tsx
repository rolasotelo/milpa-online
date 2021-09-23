import React from "react";
import Calendar from "../Calendar/Calendar";
import Cards from "../Cards/Cards";
import Milpa from "../Milpa/Milpa";

interface Props {}

const Board = (props: Props) => {
  return (
    <div className="flex flex-col">
      <Calendar />
      <div className="flex flex-row h-35rem ">
        <Milpa />
        <Cards />
        <Milpa />
      </div>
    </div>
  );
};

export default Board;
