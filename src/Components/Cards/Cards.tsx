import React from "react";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import CropCard from "../CropCard/CropCard";
import GoodCard from "../GoodCard/GoodCard";

interface Props {}

const exampleCards = [
  { title: "Corn", description: "Good for esquites" },
  { title: "Tomate", description: "De nada Italia" },
  { title: "Chile", description: "Calieeentee" },
];

const Cards = (props: Props) => {
  const context = useGameContext();
  return (
    <div className="flex flex-col w-2/8 h-full">
      <div className="flex flex-col bg-mexicanBlue  p-6 justify-evenly">
        {context.cropsHand.map((crop, index) => {
          return <CropCard key={index} title={crop?.name} />;
        })}
      </div>
      <div
        className="flex flex-row bg-mexicanBlue
       h-full py-6 justify-evenly"
      >
        {context.goodsHand.map((crop, index) => {
          return <GoodCard key={index} title={crop?.name} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
