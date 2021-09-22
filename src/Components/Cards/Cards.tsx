import React from "react";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import CropCard from "../CropCard/CropCard";

interface Props {}

const exampleCards = [
  { title: "Corn", description: "Good for esquites" },
  { title: "Tomate", description: "De nada Italia" },
  { title: "Chile", description: "Calieeentee" },
];

const Cards = (props: Props) => {
  const context = useGameContext();
  return (
    <div className="flex flex-col bg-mexicanBlue w-1/3 p-10 justify-evenly">
      {context.cropsHand.map((crop, index) => {
        return <CropCard key={index} title={crop?.name} />;
      })}
    </div>
  );
};

export default Cards;
