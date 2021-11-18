import React, { useState } from "react";

interface Props {}

export const Welcome = (props: Props) => {
  return (
    <div>
      <button id="play-button">Play</button>
      <button id="language-button">Language</button>
    </div>
  );
};
