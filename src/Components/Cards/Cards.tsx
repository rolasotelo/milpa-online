import React from "react";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import CropCard from "../CropCard/CropCard";
import GoodCard from "../GoodCard/GoodCard";

interface Props {}

const Cards = (props: Props) => {
  const context = useGameContext();
  const cropsHand = context.cropsHand ? context.cropsHand : [];
  const goodsHand = context.goodsHand ? context.goodsHand : [];
  return (
    <div className="flex flex-col w-2/8 h-full bg-mexicanBlue rounded-3xl m-1">
      <div className="w-36 bg-mexicanGreen-light text-center text-mexicanGreen-dark mt-2 mx-auto p-1 rounded-full">
        <h3>SEEDS</h3>
      </div>
      <div className="flex flex-col bg-mexicanBlue  p-2  justify-evenly">
        {cropsHand.map((crop, index) => {
          return <CropCard key={index} crop={crop} index={index} />;
        })}
      </div>
      <div className="w-36 bg-mexicanGreen-light text-center text-mexicanGreen-dark mx-auto p-1 rounded-full">
        <h3>MARKET</h3>
      </div>
      <div
        className="flex flex-row bg-mexicanBlue
       h-full py-6 justify-evenly rounded-3xl"
      >
        {goodsHand.map((good, index) => {
          return <GoodCard key={index} good={good} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
