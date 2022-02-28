import React from "react";
import { useHistory } from "react-router-dom";

interface Props {}

const ButtonStyling = "w-button-square h-button-square focus:outline-none";

const Navbar = (props: Props) => {
  const h = useHistory();
  return (
    <div className="bg-milpaBlue-default h-navbar-height">
      <div className="max-w-navbar-width mx-auto">
        <nav className="flex justify-between">
          <button
    id="menu-button"
    className={`${ButtonStyling} bg-button-menu focus:bg-button-menu-pressed`}
    />

          <button
    onClick={() => {
      h.push("/");
    }}
    className={`${ButtonStyling} bg-button-logo focus:bg-button-logo-pressed`}
    />

          <button
    className={`${ButtonStyling} bg-button-leaderboard focus:bg-button-leaderboard-pressed`}
    />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
