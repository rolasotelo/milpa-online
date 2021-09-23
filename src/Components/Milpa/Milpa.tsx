import React from "react";
import CacaoBoard from "../CacaoBoard/CacaoBoard";
import Crop from "../Crop/Crop";
import MilpaEdgeHorizontal from "../MilpaEdgeHorizontal/MilpaEdgeHorizontal";
import MilpaEdgeVertical from "../MilpaEdgeVertical/MilpaEdgeVertical";
import StatusBoard from "../StatusBoard/StatusBoard";

interface Props {}

const miMilpa = [
  { name: "🥕" },
  { name: "🌽" },
  { name: "🥕" },
  { name: "🍅" },
  { name: "🍅" },
  { name: "🫑" },
  { name: "🥕" },
  { name: "🌽" },
  { name: "🥔" },
  { name: "🥕" },
  { name: "🪰" },
  { name: "🌽" },
  { name: "🌶" },
  { name: "🥔" },
  { name: "🍅" },
  { name: "🌽" },
];

const Milpa = (props: Props) => {
  return (
    <div className="flex flex-col bg-mexicanGreen-light w-3/8">
      <div className="pb-1">
        <StatusBoard />
      </div>
      <div className="flex flex-col items-center h-full">
        <MilpaEdgeHorizontal />
        <div className="flex flex-row items-center justify-evenly w-full">
          <MilpaEdgeVertical />
          <div
            className="w-80 h-80  bg-yellow-800 grid grid-cols-4 py-2
           items-center"
          >
            {miMilpa.map((crop, index) => {
              return <Crop key={index} text={crop.name} />;
            })}
          </div>
          <MilpaEdgeVertical />
        </div>

        <MilpaEdgeHorizontal />
      </div>
    </div>
  );
};

export default Milpa;
