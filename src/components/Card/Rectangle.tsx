import React from "react";

export default function Rectangle(props: {
  title: string;
  subtitle: string;
  size?: string;
}) {
  const { title, subtitle, size } = props;
  return (
    <div
      className="flex flex-col text-center ml-5 pb-1 h-10 justify-between text-milpaBeige-default max-h-20"
      style={{
        fontWeight: 400,
        fontFamily: "bookmania, sans-serif",
        fontStyle: "normal",
        fontSize: size,
      }}
    >
      <p
        style={{
          fontWeight: 700,
        }}
      >
        {title}
      </p>
      <p>{subtitle}</p>
    </div>
  );
}

Rectangle.defaultProps = {
  size: "1rem",
};
