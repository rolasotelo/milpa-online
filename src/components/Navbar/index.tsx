/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import { useHistory } from "react-router-dom";
import MenuPopOver from "./MenuPopOver";

const ButtonStyling = "w-button-square h-button-square focus:outline-none";

function Navbar() {
  const h = useHistory();
  return (
    <div className="bg-milpaBlue-default h-navbar-height">
      <div className="max-w-navbar-width mx-auto">
        <nav className="flex justify-between mx-4 lg:mx-0">
         <MenuPopOver/>

          <button
            type="button"
            onClick={() => {
              h.push("/");
            }}
            className={`${ButtonStyling} bg-button-logo focus:bg-button-logo-pressed`}
          />

          <button
            type="button"
            className={`${ButtonStyling} bg-button-leaderboard focus:bg-button-leaderboard-pressed`}
          />
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
