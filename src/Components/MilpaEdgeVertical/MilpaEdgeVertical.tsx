import React from "react";
import Good from "../Good/Good";

interface Props {}
const miMilpa = [{ name: "🌵" }, { name: "🪨" }, { name: "🌱" }, { name: "🌵" }];
const MilpaEdgeVertical = (props: Props) => {
  return (
    <div className="w-20 h-80 bg-mexicanGreen-dark flex flex-col justify-evenly rounded-lg">
      {miMilpa.map((crop, index) => {
        return <Good key={index} text={crop.name} />;
      })}
    </div>
  );
};

export default MilpaEdgeVertical;
