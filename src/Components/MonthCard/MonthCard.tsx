import React from "react";

interface Props {
  text: string;
  isCurrentMonth: boolean;
}

const MonthCard = (props: Props) => {
  return (
    <div
      className={`${
        props.isCurrentMonth ? "bg-mexicanPink" : "bg-mexicanBone"
      }  h-8 px-2 text-xs flex items-center rounded-full`}
    >
      {props.text.toUpperCase()}
    </div>
  );
};

export default MonthCard;
