import React from "react";
import { useHistory } from "react-router-dom";
import MenuPopOver from "./MenuPopOver";
import { PropsWithChildren } from "../../common/interfaces";

const ButtonStyling = "w-button-square h-button-square focus:outline-none";

function Bar(props: PropsWithChildren) {
  const { children } = props;
  return (
    <div className="bg-milpaBlue-default h-navbar-height">
      <div className="max-w-navbar-width mx-auto">{children}</div>
    </div>
  );
}

function Logo() {
  const h = useHistory();
  const handleClick = React.useCallback(() => {
    h.push("/");
  }, [h]);
  return (
    /* eslint-disable */
    <button
      type="button"
      onClick={handleClick}
      className={`${ButtonStyling} bg-button-logo focus:bg-button-logo-pressed`}
    />
    /* eslint-enable */
  );
}

function LeaderBoard() {
  const handleClick = React.useCallback(() => {
    window.location.href = "/#leaderboard";
  }, []);

  return (
    /* eslint-disable */
    <button
      type="button"
      onClick={handleClick}
      className={`${ButtonStyling} bg-button-leaderboard focus:bg-button-leaderboard-pressed`}
    />
    /* eslint-enable */
  );
}

function Navbar() {
  return (
    <Bar>
      <nav className="flex justify-between mx-4 lg:mx-0">
        <MenuPopOver />
        <Logo />
        <LeaderBoard />
      </nav>
    </Bar>
  );
}

export default Navbar;
