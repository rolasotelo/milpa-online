import * as React from "react";
import { useState } from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

type LINK = {
  page: string;
  children: JSX.Element | string;
};

const Link = ({ page, children }: LINK) => {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <a
      className={status}
      href={page || "#"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};

export default Link;
