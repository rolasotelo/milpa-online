import React from "react";

import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        disabled={disabled}
        style={{ backgroundColor: `${disabled ? "gray" : buttonColor}` }}
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
      >
        Change to {newButtonColor}
      </button>{" "}
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onClick={(e) => {
          setDisabled(!disabled);
        }}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
