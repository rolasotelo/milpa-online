import React from "react";
import Good from "../Good/Good";

interface Props {}

const miMilpa = [{ name: "🌵" }, { name: "🪨" }, { name: "🌱" }, { name: "🌵" }];

const MilpaEdgeHorizontal = (props: Props) => {
  return (
    <div className="h-20 w-80 bg-mexicanGreen-dark flex flex-row items-center rounded-lg">
      {miMilpa.map((crop, index) => {
        return <Good key={index} text={crop.name} />;
      })}
    </div>
  );
};

export default MilpaEdgeHorizontal;
