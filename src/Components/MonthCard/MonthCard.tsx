import React from "react";

interface Props {
  text: string;
  isCurrentMonth: boolean;
}

const MonthCard = (props: Props) => {
  return (
    <div
      className={`${
        props.isCurrentMonth ? "bg-mexicanGreen-light" : "bg-mexicanBoneLight"
      } w-48 h-8`}
    >
      {props.text.toUpperCase()}
    </div>
  );
};

export default MonthCard;
