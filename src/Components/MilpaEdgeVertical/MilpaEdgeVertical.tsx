import React from "react";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import Good from "../Good/Good";

interface Props {}
const miMilpa = [{ name: "🌵" }, { name: "🪨" }, { name: "🌱" }, { name: "🌵" }];
const MilpaEdgeVertical = (props: Props) => {
  const context = useGameContext();
  return (
    <div className="w-20 h-80 bg-mexicanGreen-dark flex flex-col justify-evenly rounded-lg">
      {miMilpa.map((crop, index) => {
        return (
          <Good
            key={index}
            text={crop.name}
            canInteract={
              !!context.cardSelected?.canInteractWith.ownEmptyGoodSlots
            }
          />
        );
      })}
    </div>
  );
};

export default MilpaEdgeVertical;
