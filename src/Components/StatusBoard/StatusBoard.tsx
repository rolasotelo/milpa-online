import React from "react";

interface Props {}

const StatusBoard = (props: Props) => {
  return (
    <div className="h-16 bg-mexicanBoneLight">
      <p>Your Turn: </p> <p>0 Cacao </p>{" "}
    </div>
  );
};

export default StatusBoard;
