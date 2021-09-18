import React from "react";
import CropCard from "../CropCard/CropCard";

interface Props {}

const exampleCards = [
  { title: "Corn", description: "Good for esquites" },
  { title: "Tomate", description: "De nada Italia" },
  { title: "Chile", description: "Calieeentee" },
];

const Cards = (props: Props) => {
  return (
    <div className="flex flex-col bg-mexicanBlue w-1/3 p-10 justify-evenly">
      {exampleCards.map((crop, index) => {
        return <CropCard key={index} title={crop.title} />;
      })}
    </div>
  );
};

export default Cards;
