import React from "react";

export default function Circle(props: {
  top: string;
  down: string;
  size?: string;
  height?: string;
}) {
  const { top, down, size, height } = props;
  return (
    <div
      className={`flex flex-col text-center ml-5 mt-4 pb-3 ${height} justify-between`}
      style={{
        fontFamily: "goodlife-serif, sans-serif",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: size,
      }}
    >
      <p>{top}</p>
      <p>{down}</p>
    </div>
  );
}

Circle.defaultProps = {
  size: "2.25rem",
  height: "h-40",
};
