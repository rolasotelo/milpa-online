import React from "react";
import CacaoBoard from "../CacaoBoard/CacaoBoard";
import Crop from "../Crop/Crop";
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
    <div className="flex flex-col bg-mexicanGreen-light w-1/3">
      <div className="py-4">
        <StatusBoard />
      </div>
      <div className="m-4 p-6 bg-yellow-800 grid grid-cols-4 text-center gap-4">
        {miMilpa.map((crop, index) => {
          return <Crop key={index} text={crop.name} />;
        })}
      </div>
      <div className="py-4">
        <CacaoBoard />
      </div>
    </div>
  );
};

export default Milpa;
